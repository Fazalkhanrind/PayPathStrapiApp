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
    images: Schema.Attribute.Component<'sheard.image', true>;
    rating: Schema.Attribute.Component<'sheard.rating', false>;
    text: Schema.Attribute.Component<'sheard.text', false>;
    videoLink: Schema.Attribute.Media<'files' | 'videos'>;
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
      'sheard.button': SheardButton;
      'sheard.image': SheardImage;
      'sheard.rating': SheardRating;
      'sheard.status': SheardStatus;
      'sheard.text': SheardText;
      'sheard.video': SheardVideo;
    }
  }
}
