import { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';

interface AccordionItem {
  title: string;
  children: { label: string; link: string }[];
  link?: string;
}

interface Props {
  items: AccordionItem[];
}

export default function SimpleAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const navigate = useNavigate();
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    const newHeights = contentRefs.current.map((el) =>
      el ? el.scrollHeight : 0
    );
    setHeights(newHeights);
  }, [items, openIndex]); // aktualizuj, gdy zmienia się zawartość lub otwarty index

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const currentHeight = isOpen ? `${heights[index] || 0}px` : '0px';

        return (
          <div key={index} className="border rounded overflow-hidden shadow-sm">
            <div
              onClick={() => toggle(index)}
              className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 transition px-4 py-3 cursor-pointer"
            >
              <button
                onClick={(e) => {
                    e.stopPropagation();
                    const url = item.children?.[0]?.link?.split('#')[0]; // usuwa hash
                    if (url) navigate(url);
                }}
                className="text-primary font-semibold text-lg hover:underline text-left"
                >
                {item.title}
                </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggle(index);
                }}
                className="text-primary focus:outline-none ml-2"
                aria-expanded={isOpen}
                aria-label="Toggle accordion"
              >
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
            </div>

            <div
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              style={{
                maxHeight: currentHeight,
                transition: 'max-height 0.5s ease',
              }}
              className={`overflow-hidden bg-gray-50 px-6 ${
                isOpen ? 'py-4' : 'py-0'
              }`}
            >
              <div className="space-y-2">
                {item.children.map((child, idx) => (
                  <Link
                    key={idx}
                    to={child.link}
                    className="block text-darktext hover:text-primary hover:underline transition"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}