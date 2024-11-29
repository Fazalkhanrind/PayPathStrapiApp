import type { Schema, Struct } from '@strapi/strapi';

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
      'block.about': BlockAbout;
      'block.faq': BlockFaq;
      'block.goal': BlockGoal;
      'block.partners': BlockPartners;
      'block.pricing': BlockPricing;
      'block.process': BlockProcess;
      'block.testimonials': BlockTestimonials;
      'block.visa': BlockVisa;
      'block.visa-card': BlockVisaCard;
      'sheard.button': SheardButton;
      'sheard.card': SheardCard;
      'sheard.fa-qs-list': SheardFaQsList;
      'sheard.goal-card': SheardGoalCard;
      'sheard.image': SheardImage;
      'sheard.integrations': SheardIntegrations;
      'sheard.pricing-card': SheardPricingCard;
      'sheard.rating': SheardRating;
      'sheard.social-media-transactions': SheardSocialMediaTransactions;
      'sheard.status': SheardStatus;
      'sheard.testimonial-card': SheardTestimonialCard;
      'sheard.text': SheardText;
      'sheard.video': SheardVideo;
    }
  }
}
