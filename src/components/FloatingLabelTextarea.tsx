
import { useState, TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface FloatingLabelTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

const FloatingLabelTextarea = ({ 
  label, 
  id, 
  className, 
  ...props 
}: FloatingLabelTextareaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative">
      <textarea
        id={id}
        rows={5}
        className={cn(
          "block w-full px-4 pt-6 pb-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md text-white",
          "focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-200",
          "resize-none",
          className
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value !== '');
        }}
        onChange={(e) => setHasValue(e.target.value !== '')}
        {...props}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none text-white/70
          ${isFocused || hasValue 
            ? 'transform -translate-y-3 scale-75 text-white/90'
            : 'top-4'
          }`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelTextarea;
