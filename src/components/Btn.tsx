'use client';

interface BtnProps {
  label: string;
  width: string | number;
  variant?: 'primary' | 'secondary' | 'tertiary'; 
  onClick: () => void;
}

const Btn: React.FC<BtnProps> = ({ label, width, onClick, variant = 'primary'  }) => {
  return (
    <p className="dft mb-none">
      <span 
        className={`btnItem ${variant}`}
        style={{ width: typeof width === 'number' ? `${width}px` : width }}
        onClick={onClick}  // onClick을 버튼에서 직접 처리
      >
        {label}
      </span>
    </p>
  );
};

export default Btn;