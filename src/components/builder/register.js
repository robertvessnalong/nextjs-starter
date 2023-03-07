import { Builder } from '@builder.io/react';
import dynamic from 'next/dynamic';
import MyCustomComponent from './MyCustomComponent';

const config = [MyCustomComponent];

Builder.registerComponent(
  dynamic(() => import('./MyCustomComponent')),
  {
    name: 'ExampleCustomComponent',
    inputs: [
      {
        name: 'title',
        type: 'string',
        defaultValue: 'I am a React component!',
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: 'Find my source in /pages/[...page].js',
      },
    ],
  }
);
