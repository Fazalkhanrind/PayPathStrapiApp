import type { Schema, Struct } from '@strapi/strapi';

export interface Block404 extends Struct.ComponentSchema {
  collectionName: 'components_block_404s';
  info: {
    description: '';
    displayName: '404';
  };
  attributes: {
    Button: Schema.Attribute.Component<'sheard.button', false>;
    CompanyMedia: Schema.Attribute.Component<'sheard.company-social', false>;
    Copyright: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    FirstHead: Schema.Attribute.String;
    SecondHead: Schema.Attribute.String;
    ThirdHead: Schema.Attribute.String;
  };
}

export interface BlockAbout extends Struct.ComponentSchema {
  collectionName: 'components_block_abouts';
  info: {
    description: '';
    displayName: 'about';
    icon: 'apps';
  };
  attributes: {
    AboutButton: Schema.Attribute.Component<'sheard.button', false>;
    aboutStatus: Schema.Attribute.Component<'sheard.status', true>;
    rating: Schema.Attribute.Component<'sheard.rating', false>;
    RatingPeopleImages: Schema.Attribute.Media<'images' | 'files', true>;
    text: Schema.Attribute.Component<'sheard.text', false>;
    videoLink: Schema.Attribute.Media<'files' | 'videos'>;
  };
}

export interface BlockAboutServices extends Struct.ComponentSchema {
  collectionName: 'components_block_about_services';
  info: {
    displayName: 'AboutServices';
  };
  attributes: {
    Button: Schema.Attribute.Component<'sheard.button', false>;
    image: Schema.Attribute.Component<'sheard.image', false>;
    MainText: Schema.Attribute.Component<'sheard.text', false>;
  };
}

export interface BlockBlog extends Struct.ComponentSchema {
  collectionName: 'components_block_blogs';
  info: {
    description: '';
    displayName: 'Blog';
  };
  attributes: {
    BlogCard: Schema.Attribute.Component<'sheard.blog-card', true>;
    BlogHeadText: Schema.Attribute.Component<'sheard.text', false>;
  };
}

export interface BlockComingSoon extends Struct.ComponentSchema {
  collectionName: 'components_block_coming_soons';
  info: {
    description: '';
    displayName: 'ComingSoon';
  };
  attributes: {
    Copyright: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    FirstHeading: Schema.Attribute.String;
    image: Schema.Attribute.Component<'sheard.image', false>;
    SecondHeading: Schema.Attribute.String;
    SocialMedia: Schema.Attribute.Component<'sheard.company-social', false>;
  };
}

export interface BlockCoreFeatures extends Struct.ComponentSchema {
  collectionName: 'components_block_core_features';
  info: {
    description: '';
    displayName: 'CoreFeatures';
  };
  attributes: {
    Cards: Schema.Attribute.Component<'sheard.text', true>;
    HeadText: Schema.Attribute.Component<'sheard.text', false>;
    Image: Schema.Attribute.Component<'sheard.image', false>;
  };
}

export interface BlockFaq extends Struct.ComponentSchema {
  collectionName: 'components_block_faqs';
  info: {
    description: '';
    displayName: 'FAQ';
  };
  attributes: {
    Button: Schema.Attribute.Component<'sheard.button', false>;
    FAQs: Schema.Attribute.Component<'sheard.fa-qs-list', true>;
    MainText: Schema.Attribute.Component<'sheard.text', false>;
  };
}

export interface BlockFaqPage extends Struct.ComponentSchema {
  collectionName: 'components_block_faq_pages';
  info: {
    description: '';
    displayName: 'FAQPage';
  };
  attributes: {
    FaqMainText: Schema.Attribute.Component<'sheard.text', false>;
    FAQs: Schema.Attribute.Component<'sheard.fa-qs-list', true>;
  };
}

export interface BlockFeaturesHero extends Struct.ComponentSchema {
  collectionName: 'components_block_features_heroes';
  info: {
    description: '';
    displayName: 'FeaturesHero';
  };
  attributes: {
    Image: Schema.Attribute.Component<'sheard.image', false>;
    TopHeadText: Schema.Attribute.Component<'sheard.text', false>;
    Video: Schema.Attribute.Media<'files' | 'videos'>;
  };
}

export interface BlockFooter extends Struct.ComponentSchema {
  collectionName: 'components_block_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    Copyright: Schema.Attribute.Text;
    FooterSlider: Schema.Attribute.Component<'sheard.image', true>;
    logo: Schema.Attribute.Component<'sheard.image', false>;
    menuItems: Schema.Attribute.Component<'sheard.button', true>;
    SocialMedia: Schema.Attribute.Component<
      'sheard.social-media-accounts',
      true
    >;
    SubMenuItems: Schema.Attribute.Component<'sheard.button', true>;
  };
}

export interface BlockGoal extends Struct.ComponentSchema {
  collectionName: 'components_block_goals';
  info: {
    description: '';
    displayName: 'Goal';
  };
  attributes: {
    card: Schema.Attribute.Component<'sheard.goal-card', true>;
    GoalHeadText: Schema.Attribute.Component<'sheard.text', false>;
  };
}

export interface BlockMainText extends Struct.ComponentSchema {
  collectionName: 'components_block_main_texts';
  info: {
    displayName: 'MainText';
  };
  attributes: {
    TopText: Schema.Attribute.Component<'sheard.text', true>;
  };
}

export interface BlockNewsLetter extends Struct.ComponentSchema {
  collectionName: 'components_block_news_letters';
  info: {
    description: '';
    displayName: 'NewsLetter';
  };
  attributes: {
    Input: Schema.Attribute.Component<'sheard.input', false>;
    MainText: Schema.Attribute.Component<'sheard.text', false>;
    SubmitButton: Schema.Attribute.Component<'sheard.button', false>;
  };
}

export interface BlockPartners extends Struct.ComponentSchema {
  collectionName: 'components_block_partners';
  info: {
    displayName: 'Partners';
  };
  attributes: {
    Logos: Schema.Attribute.Component<'sheard.image', true>;
  };
}

export interface BlockPricing extends Struct.ComponentSchema {
  collectionName: 'components_block_pricings';
  info: {
    description: '';
    displayName: 'Pricing';
  };
  attributes: {
    Button: Schema.Attribute.Component<'sheard.button', false>;
    Image: Schema.Attribute.Component<'sheard.image', false>;
    mainText: Schema.Attribute.Component<'sheard.text', false>;
    PricingCard: Schema.Attribute.Component<'sheard.pricing-card', true>;
  };
}

export interface BlockProcess extends Struct.ComponentSchema {
  collectionName: 'components_block_processes';
  info: {
    description: '';
    displayName: 'Process';
  };
  attributes: {
    Button: Schema.Attribute.Component<'sheard.button', false>;
    Cards: Schema.Attribute.Component<'sheard.card', true>;
    HeadText: Schema.Attribute.Component<'sheard.text', false>;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlockSimplicity extends Struct.ComponentSchema {
  collectionName: 'components_block_simplicities';
  info: {
    displayName: 'Simplicity';
  };
  attributes: {
    Button: Schema.Attribute.Component<'sheard.button', false>;
    MainText: Schema.Attribute.Component<'sheard.text', false>;
  };
}

export interface BlockState extends Struct.ComponentSchema {
  collectionName: 'components_block_states';
  info: {
    description: '';
    displayName: 'State';
  };
  attributes: {
    HeadText: Schema.Attribute.Component<'sheard.text', false>;
    image: Schema.Attribute.Component<'sheard.image', false>;
    StatsCards: Schema.Attribute.Component<'sheard.text', true>;
  };
}

export interface BlockTeam extends Struct.ComponentSchema {
  collectionName: 'components_block_teams';
  info: {
    description: '';
    displayName: 'Team';
  };
  attributes: {
    MainText: Schema.Attribute.Component<'sheard.text', false>;
    TeamCard: Schema.Attribute.Component<'sheard.team-card', true>;
  };
}

export interface BlockTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_block_testimonials';
  info: {
    description: '';
    displayName: 'Testimonials';
  };
  attributes: {
    MainText: Schema.Attribute.Component<'sheard.text', false>;
    TestimonialList: Schema.Attribute.Component<
      'sheard.testimonial-card',
      true
    >;
  };
}

export interface BlockVisa extends Struct.ComponentSchema {
  collectionName: 'components_block_visas';
  info: {
    description: '';
    displayName: 'Services';
  };
  attributes: {
    Button: Schema.Attribute.Component<'sheard.button', false>;
    HeadText: Schema.Attribute.Component<'sheard.text', false>;
    Image: Schema.Attribute.Component<'sheard.image', false>;
    RegisterButton: Schema.Attribute.Component<'sheard.button', false>;
    TextCard: Schema.Attribute.Component<'sheard.text', true>;
    Transections: Schema.Attribute.Component<
      'sheard.social-media-transactions',
      true
    >;
  };
}

export interface BlockVisaCard extends Struct.ComponentSchema {
  collectionName: 'components_block_visa_cards';
  info: {
    description: '';
    displayName: 'VisaCard';
  };
  attributes: {
    banner: Schema.Attribute.Component<'sheard.image', true>;
    Button: Schema.Attribute.Component<'sheard.button', false>;
    CardImage: Schema.Attribute.Component<'sheard.image', false>;
    CoverImage: Schema.Attribute.Component<'sheard.image', false>;
    Info: Schema.Attribute.Component<'sheard.text', false>;
    integration: Schema.Attribute.Component<'sheard.integrations', false>;
  };
}

export interface SheardBlogCard extends Struct.ComponentSchema {
  collectionName: 'components_sheard_blog_cards';
  info: {
    description: '';
    displayName: 'BlogCard';
  };
  attributes: {
    Button: Schema.Attribute.Component<'sheard.button', false>;
    Card: Schema.Attribute.Component<'sheard.card', false>;
    date: Schema.Attribute.Date;
    views: Schema.Attribute.String;
  };
}

export interface SheardButton extends Struct.ComponentSchema {
  collectionName: 'components_sheard_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    ButtonLink: Schema.Attribute.String;
    ButtonText: Schema.Attribute.String;
  };
}

export interface SheardCard extends Struct.ComponentSchema {
  collectionName: 'components_sheard_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    titel: Schema.Attribute.String;
  };
}

export interface SheardCompanySocial extends Struct.ComponentSchema {
  collectionName: 'components_sheard_company_socials';
  info: {
    description: '';
    displayName: 'CompanySocial';
  };
  attributes: {
    FacebookLink: Schema.Attribute.Text;
    InstagramLink: Schema.Attribute.Text;
    XLink: Schema.Attribute.Text;
  };
}

export interface SheardFaQsList extends Struct.ComponentSchema {
  collectionName: 'components_sheard_fa_qs_lists';
  info: {
    displayName: 'FAQsList';
  };
  attributes: {
    Answer: Schema.Attribute.Text;
    Question: Schema.Attribute.String;
  };
}

export interface SheardGoalCard extends Struct.ComponentSchema {
  collectionName: 'components_sheard_goal_cards';
  info: {
    description: '';
    displayName: 'GoalCard';
  };
  attributes: {
    CardDescription: Schema.Attribute.Text;
    CardIcon: Schema.Attribute.Media<'images' | 'files', true>;
    CardTitel: Schema.Attribute.String;
  };
}

export interface SheardImage extends Struct.ComponentSchema {
  collectionName: 'components_sheard_images';
  info: {
    description: '';
    displayName: 'image';
  };
  attributes: {
    imageLink: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    text: Schema.Attribute.String;
  };
}

export interface SheardInput extends Struct.ComponentSchema {
  collectionName: 'components_sheard_inputs';
  info: {
    description: '';
    displayName: 'Input';
  };
  attributes: {
    IsRequired: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Lable: Schema.Attribute.String;
    Placeholder: Schema.Attribute.String;
  };
}

export interface SheardIntegrations extends Struct.ComponentSchema {
  collectionName: 'components_sheard_integrations';
  info: {
    displayName: 'integrations';
  };
  attributes: {
    Count: Schema.Attribute.String;
    description: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface SheardPricingCard extends Struct.ComponentSchema {
  collectionName: 'components_sheard_pricing_cards';
  info: {
    description: '';
    displayName: 'PricingCard';
  };
  attributes: {
    Duration: Schema.Attribute.Enumeration<['Week', 'Month', 'Year']> &
      Schema.Attribute.DefaultTo<'Month'>;
    Price: Schema.Attribute.String;
    SelectType: Schema.Attribute.Enumeration<['Personal', 'Business']> &
      Schema.Attribute.DefaultTo<'Personal'>;
    text: Schema.Attribute.Text;
  };
}

export interface SheardRating extends Struct.ComponentSchema {
  collectionName: 'components_sheard_ratings';
  info: {
    displayName: 'rating';
  };
  attributes: {
    stars: Schema.Attribute.BigInteger;
    text: Schema.Attribute.Text;
  };
}

export interface SheardSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_sheard_social_medias';
  info: {
    description: '';
    displayName: 'socialMedia';
  };
  attributes: {
    Link: Schema.Attribute.String;
    Logo: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SheardSocialMediaAccounts extends Struct.ComponentSchema {
  collectionName: 'components_sheard_social_media_accounts';
  info: {
    description: '';
    displayName: 'SocialMediaAccounts';
  };
  attributes: {
    Icons: Schema.Attribute.Enumeration<
      ['RiTwitterXFill', 'RiFacebookFill', 'RiInstagramFill']
    >;
    Link: Schema.Attribute.Text;
  };
}

export interface SheardSocialMediaTransactions extends Struct.ComponentSchema {
  collectionName: 'components_sheard_social_media_transactions';
  info: {
    description: '';
    displayName: 'SocialMediaTransactions';
  };
  attributes: {
    Amount: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<0>;
    Icons: Schema.Attribute.Enumeration<
      ['RiYoutubeFill', 'RiFacebookFill', 'RiInstagramFill', 'RiTwitterFill']
    > &
      Schema.Attribute.Required;
    PlatformName: Schema.Attribute.String;
    TransectionDate: Schema.Attribute.Date;
  };
}

export interface SheardStatus extends Struct.ComponentSchema {
  collectionName: 'components_sheard_statuses';
  info: {
    displayName: 'status';
  };
  attributes: {
    description: Schema.Attribute.Text;
    value: Schema.Attribute.String;
  };
}

export interface SheardTeamCard extends Struct.ComponentSchema {
  collectionName: 'components_sheard_team_cards';
  info: {
    description: '';
    displayName: 'TeamCard';
  };
  attributes: {
    CardText: Schema.Attribute.Component<'sheard.text', false>;
    ProfileImage: Schema.Attribute.Component<'sheard.image', false>;
    SocialMediaAccountLink: Schema.Attribute.Component<
      'sheard.team-social-media-account',
      false
    >;
  };
}

export interface SheardTeamSocialMediaAccount extends Struct.ComponentSchema {
  collectionName: 'components_sheard_team_social_media_accounts';
  info: {
    description: '';
    displayName: 'TeamSocialMediaAccount';
  };
  attributes: {
    FacebookLink: Schema.Attribute.Text;
    InstagramLink: Schema.Attribute.Text;
    WhatsappLink: Schema.Attribute.Text;
  };
}

export interface SheardTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_sheard_testimonial_cards';
  info: {
    description: '';
    displayName: 'TestimonialCard';
  };
  attributes: {
    AboutDescription: Schema.Attribute.Text;
    Destination: Schema.Attribute.String;
    logo: Schema.Attribute.Component<'sheard.image', false>;
    Name: Schema.Attribute.String;
    ProfileImage: Schema.Attribute.Component<'sheard.image', false>;
    Rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      >;
  };
}

export interface SheardText extends Struct.ComponentSchema {
  collectionName: 'components_sheard_texts';
  info: {
    description: '';
    displayName: 'text';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SheardVideo extends Struct.ComponentSchema {
  collectionName: 'components_sheard_videos';
  info: {
    displayName: 'video';
    icon: 'chartPie';
  };
  attributes: {
    video: Schema.Attribute.Media<'files' | 'videos'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'block.404': Block404;
      'block.about': BlockAbout;
      'block.about-services': BlockAboutServices;
      'block.blog': BlockBlog;
      'block.coming-soon': BlockComingSoon;
      'block.core-features': BlockCoreFeatures;
      'block.faq': BlockFaq;
      'block.faq-page': BlockFaqPage;
      'block.features-hero': BlockFeaturesHero;
      'block.footer': BlockFooter;
      'block.goal': BlockGoal;
      'block.main-text': BlockMainText;
      'block.news-letter': BlockNewsLetter;
      'block.partners': BlockPartners;
      'block.pricing': BlockPricing;
      'block.process': BlockProcess;
      'block.simplicity': BlockSimplicity;
      'block.state': BlockState;
      'block.team': BlockTeam;
      'block.testimonials': BlockTestimonials;
      'block.visa': BlockVisa;
      'block.visa-card': BlockVisaCard;
      'sheard.blog-card': SheardBlogCard;
      'sheard.button': SheardButton;
      'sheard.card': SheardCard;
      'sheard.company-social': SheardCompanySocial;
      'sheard.fa-qs-list': SheardFaQsList;
      'sheard.goal-card': SheardGoalCard;
      'sheard.image': SheardImage;
      'sheard.input': SheardInput;
      'sheard.integrations': SheardIntegrations;
      'sheard.pricing-card': SheardPricingCard;
      'sheard.rating': SheardRating;
      'sheard.social-media': SheardSocialMedia;
      'sheard.social-media-accounts': SheardSocialMediaAccounts;
      'sheard.social-media-transactions': SheardSocialMediaTransactions;
      'sheard.status': SheardStatus;
      'sheard.team-card': SheardTeamCard;
      'sheard.team-social-media-account': SheardTeamSocialMediaAccount;
      'sheard.testimonial-card': SheardTestimonialCard;
      'sheard.text': SheardText;
      'sheard.video': SheardVideo;
    }
  }
}
