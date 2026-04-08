import React from 'react';

export const UserWarning: React.FC = () => (
  <section className="section">
    <div className="box is-size-4">
      <h2 className="title is-4">Конфігурація користувача</h2>
      <p>
        Знайдіть свій
        <b> userId </b>у налаштуваннях профілю та додайте його до константи:
      </p>
      <pre className="mt-2">const USER_ID = 12345;</pre>
    </div>
  </section>
);
