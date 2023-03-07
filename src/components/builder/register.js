import { Builder } from '@builder.io/react';
import dynamic from 'next/dynamic';
import { MyCustomComponent } from './MyCustomComponent';

const config = [MyCustomComponent];

config.forEach((component) => {
  //  This is a minimal example of a custom component, you can view more complex input types here:
  //  https://www.builder.io/c/docs/custom-react-components#input-types
  Builder.registerComponent(
    dynamic(() => import(component)),
    {
      name: 'ExampleCustommponent',
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
});
