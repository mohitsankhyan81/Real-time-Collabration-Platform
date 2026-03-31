import React from 'react';
import { Loader2 } from 'lucide-react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="flex flex-col items-center gap-3">
        
        <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
                <p className="text-gray-400 text-sm animate-pulse">
          Loading messages...
        </p>

      </div>
    </div>
  );
};

export default Loading;