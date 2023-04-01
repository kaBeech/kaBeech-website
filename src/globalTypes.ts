interface LinkTile {
  linkPath: string;
  text: string;
  icon?: any;
}

interface ResponseOption {
  fullMessage: string;
  linkTile: LinkTile;
  jumpTo?: string;
}

export type { LinkTile, ResponseOption };
