'use client';

import { useEffect } from 'react';

const WordMagnifier = () => {
    useEffect(() => {
        // Function to wrap text nodes in spans for word-level magnification
        const wrapTextNodes = (element: HTMLElement) => {
            const textNodes = Array.from(element.childNodes).filter(
                node => node.nodeType === Node.TEXT_NODE && node.textContent?.trim()
            );

            textNodes.forEach((node) => {
                const text = node.textContent || '';
                const words = text.split(/(\s+)/); // Split while preserving spaces

                const fragment = document.createDocumentFragment();

                words.forEach((word) => {
                    if (word.trim()) {
                        const span = document.createElement('span');
                        span.className = 'word-magnify';
                        span.textContent = word;
                        fragment.appendChild(span);
                    } else {
                        fragment.appendChild(document.createTextNode(word));
                    }
                });

                node.parentNode?.replaceChild(fragment, node);
            });
        };

        // Apply to all text elements
        const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, span:not(.word-magnify)');
        textElements.forEach((el) => {
            if (el.classList.contains('word-magnify')) return;
            wrapTextNodes(el as HTMLElement);
        });
    }, []);

    return null;
};

export default WordMagnifier;
