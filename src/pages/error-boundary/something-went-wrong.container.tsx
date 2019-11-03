import React from 'react';
import './something-went-wrong.styles.less';

export const SomethingWentWrong: React.FC<{ readonly eventId: string }> = () => {
  return (
    <div className="st-something-went-wrong">
      <div className="st-something-went-wrong__description">
        <span>Whoops!</span>
        <span>Algo deu errado.</span>
      </div>
    </div>
  );
};
