import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { IoEarthOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';

function LoginPage() {
  const dispatch = null; // @TODO: get dispatch function from store

  const onLogin = ({ id, password }) => {
    // eslint-disable-next-line no-console
    console.log(id, password);
    dispatch();
    // @TODO: dispatch async action to login
  };

  return (
    <section className="login-page">
      <header className="login-page__hero">
        <h1><IoEarthOutline /></h1>
      </header>
      <article className="login-page__main">
        <h2>
          See
          {' '}
          <strong>The World</strong>
          ,
          {' '}
          <br />
          Through Open Space.
        </h2>

        <LoginInput login={onLogin} />
        <p>
          Don&apos;t have an account?
          {' '}
          <Link to="/register">Register</Link>
        </p>
      </article>
    </section>
  );
}

export default LoginPage;
