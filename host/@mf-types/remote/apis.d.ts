
    export type RemoteKeys = 'remote/Counter' | 'remote/UIProvider';
    type PackageType<T> = T extends 'remote/UIProvider' ? typeof import('remote/UIProvider') :T extends 'remote/Counter' ? typeof import('remote/Counter') :any;