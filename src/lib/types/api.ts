export type BannerProps = {
  logo: {
    image: {
      url: string;
    };
    alternativeText: string;
  };
  title: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  bannerImage: {
    url: string;
  };
};

export type AboutProps = {
  companyAbout: {
    title: string;
    description: string;
    image: {
      url: string;
    };
  };
  pillar_abouts: [
    {
      text: string;
    },
  ];
  company_abouts: [
    {
      title: string;
      description: string;
      logo: [
        {
          url: string;
        },
      ];
    },
  ];
};

export type DreamsBeingDreamedProps = {
  title: string;
  dreams: [
    {
      id: number;
      image: {
        url: string;
      };
      title: string;
      shortDescription: string;
      companies: [
        {
          title: string;
        },
      ];
      dream_categories: [
        {
          text: string;
        },
      ];
    },
  ];
};

export type MapProps = {
  title: string;
  mapImage: {
    url: string;
  };
  mapNumbers: [
    {
      number: number;
      description: string;
    },
  ];
};

export type CompaniesDreamingTogetherProps = {
  title: string;
  companies: [
    {
      title: string;
      image: {
        url: string;
      };
    },
  ];
  image: {
    url: string;
  };
};

export type FooterProps = {
  text: string;
  logo: {
    alternativeText: string;
    image: {
      url: string;
    };
  };
  image: {
    url: string;
  };
};

export type LandingPageProps = {
  banner: BannerProps;
  about: AboutProps;
  dreamsBeingDreamed: DreamsBeingDreamedProps;
  map: MapProps;
  companiesDreamingTogether: CompaniesDreamingTogetherProps;
  footer: FooterProps;
};
