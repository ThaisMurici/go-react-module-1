import React, { Component } from 'react';
import moment from 'moment';

import Header from './Header';
import FeedContainer from './FeedContainer';

class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        user: 'Fulano',
        date: moment('2019-03-06'),
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus vehicula ex, nec blandit nulla eleifend vitae. Phasellus pellentesque velit nec felis vehicula, ut vulputate urna laoreet. Nulla eget tortor tortor. Nam velit felis, dignissim a mauris non, convallis mattis nisl. Nulla facilisi. Vivamus condimentum tellus eros, a viverra nisl vestibulum vitae. In hendrerit gravida eros, tempor laoreet metus placerat tincidunt. Duis et nulla condimentum, porta lacus vel, gravida orci. Ut id lorem tempus, tempor nibh eget, rhoncus est.',
        avatar: 'avatar1',
      },
      {
        user: 'Fulano2',
        date: moment('2019-03-05'),
        text:
          'Sed eu nisl aliquam, sodales ipsum at, aliquet sem. Pellentesque nec dolor augue. Nullam ac gravida nunc. Vestibulum vel nisl id neque tincidunt dignissim vitae quis dui. Aenean condimentum gravida augue et maximus. Praesent vestibulum massa id nulla consectetur fringilla. Praesent non ex tincidunt felis ultrices ultricies. Sed vitae ex blandit, mattis nisl sed, fringilla arcu. Sed egestas enim eget augue tempor mollis. Praesent finibus mauris tortor, eu porta justo mollis ac. Etiam sed placerat dui. Praesent facilisis porttitor ex, eu semper lacus posuere eget. Donec cursus a nunc eu molestie.',
        avatar: 'avatar2',
      },
      {
        user: 'Fulano3',
        date: moment('2019-03-07'),
        text:
          'Nam luctus maximus molestie. Aliquam sit amet lobortis augue. Suspendisse placerat, lacus fringilla dignissim tristique, libero nisl iaculis nisl, sed malesuada arcu est eu urna. Suspendisse neque sem, lacinia at sagittis at, convallis quis dolor. Phasellus vestibulum ante et lacus suscipit, et rutrum erat ornare. Aliquam porttitor odio et est tempus imperdiet. Curabitur efficitur in libero laoreet condimentum. In ultricies turpis sit amet lacus viverra, ut lacinia velit sodales.',
        avatar: 'avatar3',
      },
    ],
  };

  handleClick = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1,
    });
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="main-wrapper">
        <Header />
        <FeedContainer posts={posts} />
      </div>
    );
  }
}

export default App;
