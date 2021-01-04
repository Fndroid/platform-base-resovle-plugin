"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformResolvePlugin = void 0;
class PlatformResolvePlugin {
    constructor(source = "resolve", target = "resolve") {
        this.source = source;
        this.target = target;
    }
    apply(resolver) {
        const target = resolver.ensureHook(this.target);
        resolver
            .getHook(this.source)
            .tapAsync("PlatformResolvePlugin", function (request, resolveContext, callback) {
            const req = request.request;
            if (req.endsWith("$")) {
                const newReq = Object.assign({}, request, {
                    request: `${req.slice(0, -1)}_${process.platform}.js`,
                });
                return resolver.doResolve(target, newReq, null, resolveContext, callback);
            }
            callback();
        });
    }
}
exports.PlatformResolvePlugin = PlatformResolvePlugin;
