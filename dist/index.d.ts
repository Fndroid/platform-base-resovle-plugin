import { Resolver } from "enhanced-resolve";
export declare class PlatformResolvePlugin {
    source: any;
    target: any;
    constructor(source?: any, target?: any);
    apply(resolver: Resolver): void;
}
