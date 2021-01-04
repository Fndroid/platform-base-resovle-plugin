import { ResolveContext, Resolver, ResolveRequest } from "enhanced-resolve";

export class PlatformResolvePlugin {
  source: any;
  target: any;

  constructor(source: any, target: any) {
    this.source = source;
    this.target = target;
  }

  apply(resolver: Resolver) {
    const target = resolver.ensureHook(this.target);
    resolver
      .getHook(this.source)
      .tapAsync(
        "PlatformResolvePlugin",
        function (
          request: ResolveRequest,
          resolveContext: ResolveContext,
          callback: Function
        ): void {
          const req: string = request.request;
          if (req.endsWith("$")) {
            const newReq: ResolveRequest = Object.assign({}, request, {
              request: `${req.slice(0, -1)}_${process.platform}.js`,
            });
            return resolver.doResolve(
              target,
              newReq,
              null,
              resolveContext,
              callback
            );
          }
          callback();
        }
      );
  }
}
