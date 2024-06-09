import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>&copy; Copyright Chikezie Ilodigwe {currentYear}</p>
      </footer>
    </div>
  );
}
