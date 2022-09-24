function App() {
  return React.createElement(
    'div',
    { id: 'app-container' },
    React.createElement(Header, null),
    React.createElement(Map, null)
  );
}

function Header() {
  return React.createElement(
    'div',
    { className: 'header' },
    React.createElement(
      'div', { className: 'headerImage' }, null,
      React.createElement('h2', null, 'IP Address Tracker'),
      React.createElement('p', null, '<< Search for any IP address or domain >>'),
      React.createElement('p', null, '<< IP Address - Location - Time Zone - ISP >>')
    )
  );
}

function Map() {
  return /*#__PURE__*/ React.createElement(
    'section',
    { className: 'headline' } /*#__PURE__*/,
    null /*#__PURE__*/,
    React.createElement('h4', null, '<< Map element here >>'),
  );
}

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
);