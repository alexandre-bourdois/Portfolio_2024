import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/api/:path*'],
};

export async function GET(req: NextRequest) {
  try {

    const credentials = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

    if (!credentials) {
      return NextResponse.json(
        { error: 'Service account credentials are missing' },
        { status: 400 }
      );
    }

    const parsedCredentials = JSON.parse(credentials);

    const auth = new google.auth.GoogleAuth({
      credentials: parsedCredentials,
      scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
    });

    const analyticsDataClient = google.analyticsdata({
      version: 'v1beta',
      auth,
    });

    const propertyId = process.env.GOOGLE_PROPERTY_ID;

    if (!propertyId) {
      return NextResponse.json(
        { error: 'Google Analytics property ID is missing' },
        { status: 400 }
      );
    }

    const response = await analyticsDataClient.properties.runReport({
      property: `properties/${propertyId}`,
      requestBody: {
        dateRanges: [
          {
            startDate: '30daysAgo',
            endDate: 'today',
          },
        ],
        metrics: [
          {
            name: 'sessions',
          },
        ]
      },
    });

    // Vérification de la réponse et traitement des données
    if (response?.data?.rows) {
      console.log('Google Analytics data response:', response.data);
      const data = response.data.rows.map((row) => ({
        browser: row.dimensionValues?.[0]?.value || 'Unknown',
        sessions: row.metricValues?.[0]?.value || 0,
      }));
      return NextResponse.json({ data });
    } else {
      console.error('No data found in Google Analytics response');
      return NextResponse.json({ error: 'No data found' }, { status: 404 });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error while handling GET request:', error.message);
      return NextResponse.json(
        { error: 'An error occurred while processing the GET request', details: error.message },
        { status: 500 }
      );
    } else {
      console.error('Unexpected error:', error);
      return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
    }
  }
}
