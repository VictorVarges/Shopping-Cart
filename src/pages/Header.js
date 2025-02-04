import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// pr como referência:  https://github.com/tryber/sd-014-a-project-trybewallet/pull/55/files
class Header extends React.Component {
  render() {
    const { email, total, currencies } = this.props;
    const currencie = `BRL ${currencies}`;
    return (
      <header>
        <div>
          <h1 data-testid="email-field">{ email }</h1>
          <h1 data-testid="total-field">{ total }</h1>
          <h1 data-testid="header-currency-field">{ currencie }</h1>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  renderExpenses: state.wallet.totalExpenses,
  renderCurrencies: state.wallet.currencies,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.string,
  total: PropTypes.number.isRequired,
};

Header.defaultProps = {
  currencies: 'R$',
};

export default connect(mapStateToProps, null)(Header);
