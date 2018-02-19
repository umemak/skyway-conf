import React from 'react';

import Root from './container/root';
import Screen from './container/screen';
import MemberList from './container/member-list';
import Setting from './container/setting';
import Invite from './container/invite';
import Chat from './container/chat';
import ScreenShare from './container/screen-share';
import ScreenShareIntro from './container/screen-share-intro';

const ConfApp = () => (
  <Root>
    <main className="L-Main">
      <Screen />
      <MemberList />
    </main>
    <Setting />
    <Invite />
    <div className="L-RightSide">
      <div>
        <Chat />
      </div>
      <div>
        <ScreenShare />
      </div>
    </div>
    <ScreenShareIntro />
  </Root>
);

export default ConfApp;
