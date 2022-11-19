import Image from 'next/image';
import React from 'react';
import Me from '../../public/static/images/zyk.jpg';
import { GitHubShareButton } from '../GitHubShareButton';
import ThemeToggle from '../Toggle';

type Props = {};

function Header({}: Props) {
  return (
    <header className="notion-header portfolio-header">
      <div className="portfolio-nav-header">
        <div className="breadcrumbs">
          <a title="my photo" href="" className="breadcrumb active">
            <div className="portfolio-page-icon-inline">
              <Image
                src={Me}
                className="rounded-full"
                placeholder="blur"
                width={Me.width}
                height={Me.height}
                alt="Zyk"
              />
            </div>
          </a>
        </div>
        <div>
          <ThemeToggle size="3rem" />
        </div>

        <div className="notion-nav-header-rhs breadcrumbs">
          <GitHubShareButton
            style={{
              fill: '#70B7FD',
              color: '#fff',
              position: 'absolute',
              zIndex: 1001,
              top: 0,
              height: '5rem',
              right: 0,
              border: 0,
              transform: 'scale(1, 1)',
            }}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
