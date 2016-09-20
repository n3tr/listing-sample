import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import logo from '../logo.svg';
import ListingItem from '../components/ListingItem.js';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Reapeated', module)
  .add('Listing', () => {
    let listing = {
      'id': 0,
      'title': "Hello World",
      'detail': "Listing detail goes here",
      'thumbnail': logo,
      'highlight': "highlight",
    }
    let idx = 0
    return <ListingItem listing={listing} key={idx} />
  });

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
