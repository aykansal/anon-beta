import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const getFolderStructure = (files) => {
  const structure = {};

  // Convert array to object with filePaths
  const fileMap = {};
  Object.entries(files).forEach(([, file]) => {
    if (file && file.filePath) {
      fileMap[file.filePath] = file.code;
    }
  });

  // Now process the file paths
  Object.keys(fileMap).forEach((filePath) => {
    const parts = filePath.split('/').filter(Boolean);
    let current = structure;

    parts.forEach((part, index) => {
      if (index === parts.length - 1) {
        // It's a file
        if (!current._files) current._files = [];
        current._files.push({
          name: part,
          fullPath: filePath,
          code: fileMap[filePath],
        });
      } else {
        // It's a directory
        if (!current[part]) current[part] = {};
        current = current[part];
      }
    });
  });

  return structure;
};

export const flattenFileStructure = (structure, prefix = '') => {
  let suggestions = [];

  // Add folders first
  Object.keys(structure).forEach((key) => {
    if (key !== '_files') {
      suggestions.push({
        id: `${prefix}${key}/`,
        display: `${prefix}${key}/`,
        isFolder: true,
      });

      // Add nested items
      suggestions = suggestions.concat(
        flattenFileStructure(structure[key], `${prefix}${key}/`)
      );
    }
  });

  // Add files
  if (structure._files) {
    structure._files.forEach((file) => {
      suggestions.push({
        id: file.fullPath,
        display: file.fullPath,
        isFile: true,
      });
    });
  }

  return suggestions;
};

export const mentionsInputStyle = {
  input: {
    width: '100%',
    backgroundColor: 'hsl(var(--background))',
    color: 'hsl(var(--foreground))',
    fontSize: '14px',
    '&::placeholder': {
      color: 'hsl(var(--muted-foreground))',
    },
  },
  suggestions: {
    item: {
      color: 'hsl(var(--muted-foreground))',
      '&:hover': {
        color: 'hsl(var(--foreground))',
      },
    },
  },
};


// Add a style tag for custom CSS
export const CustomStylesChatView = () => (
  <style jsx global>{`
    .mentions-input {
      width: 100%;
      position: relative;
    }

    .mentions-input__control {
      width: 100%;
      min-height: 44px;
      max-height: 120px;
      overflow-y: auto;
      border-radius: 6px;
      border: 1px solid hsl(var(--border));
      background-color: hsl(var(--background));
      transition: max-height 0.2s ease-in-out;
    }

    .mentions-input.expanded .mentions-input__control {
      max-height: calc(100vh - 250px);
      min-height: 200px;
    }

    .mentions-input__highlighter {
      padding: 9px 12px;
      padding-right: 40px;
      white-space: pre-wrap;
      word-wrap: break-word;
      word-break: break-word;
      overflow-wrap: break-word;
    }

    .mentions-input__input {
      padding: 9px 12px !important;
      padding-right: 40px !important;
      min-height: 44px;
      white-space: pre-wrap !important;
      word-wrap: break-word !important;
      word-break: break-word !important;
      overflow-wrap: break-word !important;
      overflow: auto !important;
      line-height: 1.5 !important;
      color: hsl(var(--foreground)) !important;
      font-size: 14px !important;
    }

    .mentions-input.expanded .mentions-input__input {
      max-height: 100%;
      min-height: 200px;
    }

    .mentions-input__suggestions__list {
      background-color: hsl(var(--background));
      border: 1px solid hsl(var(--border));
      border-radius: 6px;
      max-height: 200px;
      overflow-y: auto;
      z-index: 10;
    }

    .mentions-input__suggestions__item {
      padding: 6px 10px;
      border-bottom: 1px solid hsl(var(--border));
      color: hsl(var(--muted-foreground));
    }

    .mentions-input__suggestions__item--focused {
      background-color: hsl(var(--secondary));
      color: hsl(var(--foreground));
    }

    /* Fix for the textarea to properly wrap text */
    .mentions-input textarea {
      white-space: pre-wrap !important;
      word-wrap: break-word !important;
      overflow-wrap: break-word !important;
    }

    .expand-button {
      position: absolute;
      right: 10px;
      top: 10px;
      background: transparent;
      border: none;
      color: hsl(var(--muted-foreground));
      cursor: pointer;
      z-index: 5;
      padding: 4px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s ease;
    }

    .expand-button:hover {
      background-color: hsl(var(--secondary));
      color: hsl(var(--foreground));
    }
  `}</style>
);