import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || "";

export const initializeMixpanel = () => {
  if (MIXPANEL_TOKEN) {
    mixpanel.init(MIXPANEL_TOKEN, {
      track_pageview: true,
    });
  }
};

export const trackMixpanel = (event: string, properties?: any) => {
  mixpanel.track(event, properties);
};
