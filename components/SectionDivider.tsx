import React from 'react';

const SectionDivider: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center py-8 opacity-60">
      <div className="h-px w-24 bg-gradient-to-r from-transparent to-maroon"></div>
      <div className="mx-4 text-maroon text-2xl">✤</div>
      <div className="h-px w-24 bg-gradient-to-l from-transparent to-maroon"></div>
    </div>
  );
};

export default SectionDivider;