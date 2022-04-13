import { workspace } from 'coc.nvim';

export function getConfigCustomServerPath() {
  return workspace.getConfiguration('tailwindCSS').get<string>('custom.serverPath', '');
}

export function getConfigExcludePatterns(): string[] {
  return workspace.getConfiguration('tailwindCSS').get<string[]>('files.exclude', []);
}
