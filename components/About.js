import react from 'react';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>This is me.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices euismod erat placerat fermentum. Pellentesque quis velit varius, dignissim risus vitae, rhoncus lacus. Vestibulum condimentum aliquet tincidunt. Nullam dolor ligula, lacinia sed aliquet at, molestie ut erat. Nam pharetra malesuada eleifend. Aenean lobortis dui varius tortor porttitor semper. Donec congue eros dui, rutrum consectetur nulla eleifend a.</p>
        <style jsx> {`
          h2 {
            text-align: center;
            color: #fcfaf9;
          }
          p {
            color: #fcfaf9;
            text-align: center;
          }
          div {
            padding: 15px;
          }
        `}</style>
      </div>
    );
  }
}