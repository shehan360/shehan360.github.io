var searchData = {
  "modules": [
    {
      "id": "auth",
      "searchString": "\u003cp\u003eThis module provides the default authentication provider configurations, which can be extended to create new authentication providers.\u003c/p\u003e"
    },
    {
      "id": "http",
      "searchString": "\u003cp\u003eThis module provides an implementation for connecting and interacting with HTTP, HTTP2, and WebSocket endpoints.\u003c/p\u003e"
    },
    {
      "id": "io",
      "searchString": "\u003cp\u003eThis module is designed to support input and output operations via channels in a canonical way, either in a blocking,\nor non-blocking manner.\u003c/p\u003e"
    }
  ],
  "objects": [
    {
      "id": "InboundAuthProvider",
      "searchString": "\u003cp\u003eRepresents the inbound Auth provider, which could be used to authenticate endpoints.\u003c/p\u003e",
      "moduleId": "auth"
    },
    {
      "id": "InboundBasicAuthProvider",
      "searchString": "\u003cp\u003eRepresents the configuration file based inbound Basic Auth provider, which is an implementation of the\n\u003ccode\u003eauth:InboundAuthProvider\u003c/code\u003e interface.\u003c/p\u003e",
      "moduleId": "auth"
    },
    {
      "id": "OutboundAuthProvider",
      "searchString": "\u003cp\u003eRepresents the outbound Auth provider, which could be used to authenticate external endpoints.\u003c/p\u003e",
      "moduleId": "auth"
    },
    {
      "id": "OutboundBasicAuthProvider",
      "searchString": "\u003cp\u003eRepresents the outbound Basic Auth authenticator, which is an implementation of the \u003ccode\u003eauth:OutboundAuthProvider\u003c/code\u003e interface.\u003c/p\u003e",
      "moduleId": "auth"
    },
    {
      "id": "AuthnFilter",
      "searchString": "\u003cp\u003eRepresentation of the Authentication filter.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "AuthzFilter",
      "searchString": "\u003cp\u003eRepresentation of the Authorization filter.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "AuthzHandler",
      "searchString": "\u003cp\u003eRepresentation of Authorization Handler for HTTP.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "BasicAuthHandler",
      "searchString": "\u003cp\u003eDefines the Basic Auth header handler for inbound and outbound HTTP traffic.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "BearerAuthHandler",
      "searchString": "\u003cp\u003eRepresentation of the Bearer Auth header handler for both inbound and outbound HTTP traffic.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "Cookie",
      "searchString": "\u003cp\u003eRepresents a Cookie.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "CookieStore",
      "searchString": "\u003cp\u003eRepresents the cookie store.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "CsvPersistentCookieHandler",
      "searchString": "\u003cp\u003eRepresents a default persistent cookie handler, which stores persistent cookies in a CSV file.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "FilterContext",
      "searchString": "\u003cp\u003eRepresentation of request filter Context.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "HttpCache",
      "searchString": "\u003cp\u003eImplements a cache for storing HTTP responses.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "HttpFuture",
      "searchString": "\u003cp\u003eRepresents a \u0027future\u0027 that returns as a result of an asynchronous HTTP request submission.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "InboundAuthHandler",
      "searchString": "\u003cp\u003eThe representation of an inbound authentication handler for HTTP traffic.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "LoadBalancerRoundRobinRule",
      "searchString": "\u003cp\u003eImplementation of round robin load balancing strategy.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "LoadBalancerRule",
      "searchString": "\u003cp\u003eLoadBalancerRule provides a required interfaces to implement different algorithms.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "OutboundAuthHandler",
      "searchString": "\u003cp\u003eThe representation of an outbound authentication handler for HTTP traffic.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "PersistentCookieHandler",
      "searchString": "\u003cp\u003eThe representation of a persistent cookie handler for managing persistent cookies.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "PushPromise",
      "searchString": "\u003cp\u003eRepresents an HTTP/2 \u003ccode\u003ePUSH_PROMISE\u003c/code\u003e frame.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "Request",
      "searchString": "\u003cp\u003eRepresents an HTTP request.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "RequestCacheControl",
      "searchString": "\u003cp\u003eConfigures the cache control directives for an \u003ccode\u003ehttp:Request\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "RequestFilter",
      "searchString": "\u003cp\u003eAbstract Representation of a HTTP Request Filter.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "Response",
      "searchString": "\u003cp\u003eRepresents an HTTP response.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "ResponseCacheControl",
      "searchString": "\u003cp\u003eConfigures cache control directives for an \u003ccode\u003ehttp:Response\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "ResponseFilter",
      "searchString": "\u003cp\u003eAbstract Representation of a HTTP Response Filter.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "ReadableByteChannel",
      "searchString": "\u003cp\u003eReadableByteChannel represents an input resource (i.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "ReadableCSVChannel",
      "searchString": "\u003cp\u003eRepresents a ReadableCSVChannel which could be used to read records from CSV file.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "ReadableCharacterChannel",
      "searchString": "\u003cp\u003eRepresents a channel, which could be used to read characters through a given ReadableByteChannel.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "ReadableDataChannel",
      "searchString": "\u003cp\u003eRepresents a data channel for reading data.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "ReadableTextRecordChannel",
      "searchString": "\u003cp\u003eRepresents a channel which will allow to read\u003c/p\u003e\n",
      "moduleId": "io"
    },
    {
      "id": "StringReader",
      "searchString": "\u003cp\u003eRepresents a reader which will wrap string content as a channel.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "WritableByteChannel",
      "searchString": "\u003cp\u003eWritableByteChannel represents an output resource (i.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "WritableCSVChannel",
      "searchString": "\u003cp\u003eRepresents a WritableCSVChannel, which could be used to write records from the CSV file.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "WritableCharacterChannel",
      "searchString": "\u003cp\u003eRepresents a channel which could be used to write characters through a given WritableCharacterChannel.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "WritableDataChannel",
      "searchString": "\u003cp\u003eRepresents a WritableDataChannel for writing data.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "WritableTextRecordChannel",
      "searchString": "\u003cp\u003eRepresents a channel, which will allow to write records through a given WritableCharacterChannel.\u003c/p\u003e",
      "moduleId": "io"
    }
  ],
  "functions": [
    {
      "id": "checkForScopeMatch",
      "searchString": "\u003cp\u003eChecks whether the scopes of the user match the scopes of the resource.\u003c/p\u003e",
      "moduleId": "auth"
    },
    {
      "id": "extractUsernameAndPassword",
      "searchString": "\u003cp\u003eExtracts the username and the password from the base64-encoded \u003ccode\u003eusername:password\u003c/code\u003e value.\u003c/p\u003e",
      "moduleId": "auth"
    },
    {
      "id": "setAuthenticationContext",
      "searchString": "\u003cp\u003eSets the authentication-related values (scheme, auth token) to the authentication context of the invocation context.\u003c/p\u003e",
      "moduleId": "auth"
    },
    {
      "id": "setPrincipal",
      "searchString": "\u003cp\u003eSets the authentication-related values (user ID, username, scopes, claims) to the principal of the invocation context.\u003c/p\u003e",
      "moduleId": "auth"
    },
    {
      "id": "createHttpCachingClient",
      "searchString": "\u003cp\u003eCreates an HTTP client capable of caching HTTP responses.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "createHttpSecureClient",
      "searchString": "\u003cp\u003eCreates an HTTP client capable of securing HTTP requests with authentication.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "extractAuthorizationHeaderValue",
      "searchString": "\u003cp\u003eExtracts the Authorization header value from the request.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "invokeEndpoint",
      "searchString": "\u003cp\u003eThe HEAD remote function implementation of the Circuit Breaker.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "isResourceSecured",
      "searchString": "\u003cp\u003eChecks whether the calling resource is secured by evaluating the authentication hierarchy.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "parseHeader",
      "searchString": "\u003cp\u003eParses the given header value to extract its value and parameter map.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "createReadableChannel",
      "searchString": "\u003cp\u003eCreates an in-memory channel, which will be a reference stream of bytes.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "openReadableCsvFile",
      "searchString": "\u003cp\u003eRetrieves a readable CSV channel from a given file path.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "openReadableFile",
      "searchString": "\u003cp\u003eRetrieves a \u003ccode\u003eReadableByteChannel\u003c/code\u003e from a given file path.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "openWritableCsvFile",
      "searchString": "\u003cp\u003eRetrieves a writable CSV channel from a given file path.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "openWritableFile",
      "searchString": "\u003cp\u003eRetrieves a \u003ccode\u003eWritableByteChannel\u003c/code\u003e from a given file path.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "print",
      "searchString": "\u003cp\u003ePrints \u003ccode\u003eany\u003c/code\u003e or \u003ccode\u003eerror\u003c/code\u003e value(s) to the STDOUT.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "println",
      "searchString": "\u003cp\u003ePrints \u003ccode\u003eany\u003c/code\u003e or \u003ccode\u003eerror\u003c/code\u003e value(s) to the STDOUT followed by a new line.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "readln",
      "searchString": "\u003cp\u003eRetrieves the input read from the STDIN.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "sprintf",
      "searchString": "\u003cp\u003eReturns a formatted string using the specified format string and arguments.\u003c/p\u003e",
      "moduleId": "io"
    }
  ],
  "records": [
    {
      "id": "BasicAuthConfig",
      "searchString": "\u003cp\u003eRepresents the inbound Basic Authentication configurations.\u003c/p\u003e",
      "moduleId": "auth"
    },
    {
      "id": "Credential",
      "searchString": "\u003cp\u003eRepresents the Basic Authentication configurations, which are used by the HTTP endpoint.\u003c/p\u003e",
      "moduleId": "auth"
    },
    {
      "id": "Bucket",
      "searchString": "\u003cp\u003eRepresents a discrete sub-part of the time window (Bucket).\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "CacheConfig",
      "searchString": "\u003cp\u003eProvides a set of configurations for controlling the caching behaviour of the endpoint.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "CircuitBreakerConfig",
      "searchString": "\u003cp\u003eProvides a set of configurations for controlling the behaviour of the Circuit Breaker.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "CircuitBreakerInferredConfig",
      "searchString": "\u003cp\u003eDerived set of configurations from the \u003ccode\u003eCircuitBreakerConfig\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "CircuitHealth",
      "searchString": "\u003cp\u003eMaintains the health of the Circuit Breaker.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "ClientConfiguration",
      "searchString": "\u003cp\u003eProvides a set of configurations for controlling the behaviours when communicating with a remote HTTP endpoint.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "ClientHttp1Settings",
      "searchString": "\u003cp\u003eProvides settings related to HTTP/1.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "ClientHttp2Settings",
      "searchString": "\u003cp\u003eProvides settings related to HTTP/2 protocol.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "ClientSecureSocket",
      "searchString": "\u003cp\u003eProvides configurations for facilitating secure communication with a remote HTTP endpoint.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "CommonClientConfiguration",
      "searchString": "\u003cp\u003eCommon client configurations for the next level clients.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "CompressionConfig",
      "searchString": "\u003cp\u003eA record for providing configurations for content compression.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "CookieConfig",
      "searchString": "\u003cp\u003eClient configuration for cookies.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "CorsConfig",
      "searchString": "\u003cp\u003eConfigurations for CORS support.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "FailoverClientConfiguration",
      "searchString": "\u003cp\u003eProvides a set of HTTP related configurations and failover related configurations.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "FailoverConfig",
      "searchString": "\u003cp\u003eProvides a set of configurations for controlling the failover behaviour of the endpoint.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "FailoverInferredConfig",
      "searchString": "\u003cp\u003eRepresents the inferred failover configurations passed into the failover client.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "FollowRedirects",
      "searchString": "\u003cp\u003eProvides configurations for controlling the endpoint\u0027s behaviour in response to HTTP redirect related responses.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "HttpResourceConfig",
      "searchString": "\u003cp\u003eConfiguration for an HTTP resource.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "HttpServiceConfig",
      "searchString": "\u003cp\u003eContains the configurations for an HTTP service.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "HttpTimeoutError",
      "searchString": "\u003cp\u003eDefines a timeout error occurred during service invocation.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "ListenerAuth",
      "searchString": "\u003cp\u003eAuthentication configurations for the listener.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "ListenerConfiguration",
      "searchString": "\u003cp\u003eProvides a set of configurations for HTTP service endpoints.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "ListenerHttp1Settings",
      "searchString": "\u003cp\u003eProvides settings related to HTTP/1.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "ListenerOcspStapling",
      "searchString": "\u003cp\u003eA record for providing configurations for certificate revocation status checks.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "ListenerSecureSocket",
      "searchString": "\u003cp\u003eConfigures the SSL/TLS options to be used for HTTP service.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "LoadBalanceActionErrorData",
      "searchString": "\u003cp\u003eRepresents the error attributes in addition to the message and the cause of the \u003ccode\u003eLoadBalanceActionError\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "LoadBalanceClientConfiguration",
      "searchString": "\u003cp\u003eThe configurations related to the load balance client endpoint.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "Local",
      "searchString": "\u003cp\u003ePresents a read-only view of the local address.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "MutualSslHandshake",
      "searchString": "\u003cp\u003eA record for providing mutual SSL handshake results.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "OutboundAuthConfig",
      "searchString": "\u003cp\u003eThe \u003ccode\u003eOutboundAuthConfig\u003c/code\u003e record can be used to configure the authentication mechanism used by the HTTP endpoint.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "PoolConfiguration",
      "searchString": "\u003cp\u003eConfigurations for managing HTTP client connection pool.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "Protocols",
      "searchString": "\u003cp\u003eA record for configuring SSL/TLS protocol and version to be used.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "ProxyConfig",
      "searchString": "\u003cp\u003eProxy server configurations to be used with the HTTP client endpoint.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "Remote",
      "searchString": "\u003cp\u003ePresents a read-only view of the remote address.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "ResourceAuth",
      "searchString": "\u003cp\u003eConfigures the authentication scheme for a resource.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "RetryConfig",
      "searchString": "\u003cp\u003eProvides configurations for controlling the retrying behavior in failure scenarios.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "RetryInferredConfig",
      "searchString": "\u003cp\u003eDerived set of configurations from the \u003ccode\u003eRetryConfig\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "RollingWindow",
      "searchString": "\u003cp\u003eRepresents a rolling window in the Circuit Breaker.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "ServiceAuth",
      "searchString": "\u003cp\u003eConfigures the authentication scheme for a service.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "TargetService",
      "searchString": "\u003cp\u003eRepresents a single service and its related configurations.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "ValidateCert",
      "searchString": "\u003cp\u003eA record for providing configurations for certificate revocation status checks.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "Versioning",
      "searchString": "\u003cp\u003eConfigurations for service versioning.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "WSServiceConfig",
      "searchString": "\u003cp\u003eConfigurations for a WebSocket service.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "WebSocketClientConfiguration",
      "searchString": "\u003cp\u003eConfigurations for the WebSocket client endpoint.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "WebSocketFailoverClientConfiguration",
      "searchString": "\u003cp\u003eConfigurations for the WebSocket client endpoint.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "WebSocketRetryConfig",
      "searchString": "\u003cp\u003eRetry configurations for WebSocket.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "WebSocketUpgradeConfig",
      "searchString": "\u003cp\u003eResource configuration to upgrade from HTTP to WebSocket.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "T6",
      "searchString": "",
      "moduleId": "io"
    },
    {
      "id": "T7",
      "searchString": "",
      "moduleId": "io"
    },
    {
      "id": "T8",
      "searchString": "",
      "moduleId": "io"
    },
    {
      "id": "T9",
      "searchString": "",
      "moduleId": "io"
    }
  ],
  "constants": [
    {
      "id": "DEFAULT_CHARSET",
      "searchString": "\u003cp\u003eDefault charset to be used with password hashing.\u003c/p\u003e",
      "moduleId": "auth"
    },
    {
      "id": "CONFIG_PREFIX",
      "searchString": "\u003cp\u003ePrefix used to denote special configuration values.\u003c/p\u003e",
      "moduleId": "auth"
    },
    {
      "id": "CONFIG_PREFIX_SHA256",
      "searchString": "\u003cp\u003ePrefix used to denote that the config value is a SHA-256 hash.\u003c/p\u003e",
      "moduleId": "auth"
    },
    {
      "id": "CONFIG_PREFIX_SHA384",
      "searchString": "\u003cp\u003ePrefix used to denote that the config value is a SHA-384 hash.\u003c/p\u003e",
      "moduleId": "auth"
    },
    {
      "id": "CONFIG_PREFIX_SHA512",
      "searchString": "\u003cp\u003ePrefix used to denote that the config value is a SHA-512 hash.\u003c/p\u003e",
      "moduleId": "auth"
    },
    {
      "id": "AUTH_SCHEME_BASIC",
      "searchString": "\u003cp\u003ePrefix used to denote Basic Authentication scheme.\u003c/p\u003e",
      "moduleId": "auth"
    },
    {
      "id": "AUTH_SCHEME_BEARER",
      "searchString": "\u003cp\u003eThe prefix used to denote the Bearer Authentication scheme.\u003c/p\u003e",
      "moduleId": "auth"
    },
    {
      "id": "AUTH_HEADER",
      "searchString": "\u003cp\u003eRepresents the Authorization header name.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "AUTH_HEADER_BEARER",
      "searchString": "\u003cp\u003eIndicates that the authentication credentials should be sent via the Authentication header.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "POST_BODY_BEARER",
      "searchString": "\u003cp\u003eIndicates that the Authentication credentials should be sent via the body of the POST request.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "NO_BEARER",
      "searchString": "\u003cp\u003eIndicates that the authentication credentials should not be sent.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "STATUS_CODE",
      "searchString": "\u003cp\u003eIndicates the status code.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "NO_CACHE",
      "searchString": "\u003cp\u003eForces the cache to validate a cached response with the origin server before serving.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "NO_STORE",
      "searchString": "\u003cp\u003eInstructs the cache to not store a response in non-volatile storage.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "NO_TRANSFORM",
      "searchString": "\u003cp\u003eInstructs intermediaries not to transform the payload.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "MAX_AGE",
      "searchString": "\u003cp\u003eWhen used in requests, \u003ccode\u003emax-age\u003c/code\u003e implies that clients are not willing to accept responses whose age is greater\nthan \u003ccode\u003emax-age\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "MAX_STALE",
      "searchString": "\u003cp\u003eIndicates that the client is willing to accept responses which have exceeded their freshness lifetime by no more\nthan the specified number of seconds.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "MIN_FRESH",
      "searchString": "\u003cp\u003eIndicates that the client is only accepting responses whose freshness lifetime \u0026gt;\u003d current age + min-fresh.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "ONLY_IF_CACHED",
      "searchString": "\u003cp\u003eIndicates that the client is only willing to accept a cached response.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "MUST_REVALIDATE",
      "searchString": "\u003cp\u003eIndicates that once the response has become stale, it should not be reused for subsequent requests without\nvalidating with the origin server.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "PUBLIC",
      "searchString": "\u003cp\u003eIndicates that any cache may store the response.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "PRIVATE",
      "searchString": "\u003cp\u003eIndicates that the response is intended for a single user and should not be stored by shared caches.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "PROXY_REVALIDATE",
      "searchString": "\u003cp\u003eHas the same semantics as \u003ccode\u003emust-revalidate\u003c/code\u003e, except that this does not apply to private caches.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "S_MAX_AGE",
      "searchString": "\u003cp\u003eIn shared caches, \u003ccode\u003es-maxage\u003c/code\u003e overrides the \u003ccode\u003emax-age\u003c/code\u003e or \u003ccode\u003eexpires\u003c/code\u003e header field.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "MAX_STALE_ANY_AGE",
      "searchString": "\u003cp\u003eSetting this as the \u003ccode\u003emax-stale\u003c/code\u003e directives indicates that the \u003ccode\u003emax-stale\u003c/code\u003e directive does not specify a limit.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "CACHE_CONTROL_AND_VALIDATORS",
      "searchString": "\u003cp\u003eThis is a more restricted mode of RFC 7234.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "RFC_7234",
      "searchString": "\u003cp\u003eCaching behaviour is as specified by the RFC 7234 specification.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "MULTIPART_AS_PRIMARY_TYPE",
      "searchString": "\u003cp\u003eRepresents multipart primary type\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "HTTP_FORWARD",
      "searchString": "\u003cp\u003eConstant for the HTTP FORWARD method\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "HTTP_GET",
      "searchString": "\u003cp\u003eConstant for the HTTP GET method\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "HTTP_POST",
      "searchString": "\u003cp\u003eConstant for the HTTP POST method\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "HTTP_DELETE",
      "searchString": "\u003cp\u003eConstant for the HTTP DELETE method\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "HTTP_OPTIONS",
      "searchString": "\u003cp\u003eConstant for the HTTP OPTIONS method\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "HTTP_PUT",
      "searchString": "\u003cp\u003eConstant for the HTTP PUT method\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "HTTP_PATCH",
      "searchString": "\u003cp\u003eConstant for the HTTP PATCH method\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "HTTP_HEAD",
      "searchString": "\u003cp\u003eConstant for the HTTP HEAD method\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "HTTP_SUBMIT",
      "searchString": "\u003cp\u003econstant for the HTTP SUBMIT method\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "HTTP_NONE",
      "searchString": "\u003cp\u003eConstant for the identify not an HTTP Operation\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "CHUNKING_AUTO",
      "searchString": "\u003cp\u003eIf the payload is less than 8KB, content-length header is set in the outbound request/response,\notherwise chunking header is set in the outbound request/response.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "CHUNKING_ALWAYS",
      "searchString": "\u003cp\u003eAlways set chunking header in the response.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "CHUNKING_NEVER",
      "searchString": "\u003cp\u003eNever set the chunking header even if the payload is larger than 8KB in the outbound request/response.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "COMPRESSION_AUTO",
      "searchString": "\u003cp\u003eWhen service behaves as a HTTP gateway inbound request/response accept-encoding option is set as the\noutbound request/response accept-encoding/content-encoding option.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "COMPRESSION_ALWAYS",
      "searchString": "\u003cp\u003eAlways set accept-encoding/content-encoding in outbound request/response.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "COMPRESSION_NEVER",
      "searchString": "\u003cp\u003eNever set accept-encoding/content-encoding header in outbound request/response.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "REDIRECT_MULTIPLE_CHOICES_300",
      "searchString": "\u003cp\u003eRepresents the HTTP redirect status code \u003ccode\u003e300 - Multiple Choices\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "REDIRECT_MOVED_PERMANENTLY_301",
      "searchString": "\u003cp\u003eRepresents the HTTP redirect status code \u003ccode\u003e301 - Moved Permanently\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "REDIRECT_FOUND_302",
      "searchString": "\u003cp\u003eRepresents the HTTP redirect status code \u003ccode\u003e302 - Found\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "REDIRECT_SEE_OTHER_303",
      "searchString": "\u003cp\u003eRepresents the HTTP redirect status code \u003ccode\u003e303 - See Other\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "REDIRECT_NOT_MODIFIED_304",
      "searchString": "\u003cp\u003eRepresents the HTTP redirect status code \u003ccode\u003e304 - Not Modified\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "REDIRECT_USE_PROXY_305",
      "searchString": "\u003cp\u003eRepresents the HTTP redirect status code \u003ccode\u003e305 - Use Proxy\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "REDIRECT_TEMPORARY_REDIRECT_307",
      "searchString": "\u003cp\u003eRepresents the HTTP redirect status code \u003ccode\u003e307 - Temporary Redirect\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "REDIRECT_PERMANENT_REDIRECT_308",
      "searchString": "\u003cp\u003eRepresents the HTTP redirect status code \u003ccode\u003e308 - Permanent Redirect\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "AGE",
      "searchString": "\u003cp\u003eHTTP header key \u003ccode\u003eage\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "AUTHORIZATION",
      "searchString": "\u003cp\u003eHTTP header key \u003ccode\u003eauthorization\u003c/code\u003e\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "CACHE_CONTROL",
      "searchString": "\u003cp\u003eHTTP header key \u003ccode\u003ecache-control\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "CONTENT_LENGTH",
      "searchString": "\u003cp\u003eHTTP header key \u003ccode\u003econtent-length\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "CONTENT_TYPE",
      "searchString": "\u003cp\u003eHTTP header key \u003ccode\u003econtent-type\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "DATE",
      "searchString": "\u003cp\u003eHTTP header key \u003ccode\u003edate\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "ETAG",
      "searchString": "\u003cp\u003eHTTP header key \u003ccode\u003eetag\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "EXPECT",
      "searchString": "\u003cp\u003eHTTP header key \u003ccode\u003eexpect\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "EXPIRES",
      "searchString": "\u003cp\u003eHTTP header key \u003ccode\u003eexpires\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "IF_MATCH",
      "searchString": "\u003cp\u003eHTTP header key \u003ccode\u003eif-match\u003c/code\u003e\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "IF_MODIFIED_SINCE",
      "searchString": "\u003cp\u003eHTTP header key \u003ccode\u003eif-modified-since\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "IF_NONE_MATCH",
      "searchString": "\u003cp\u003eHTTP header key \u003ccode\u003eif-none-match\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "IF_RANGE",
      "searchString": "\u003cp\u003eHTTP header key \u003ccode\u003eif-range\u003c/code\u003e\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "IF_UNMODIFIED_SINCE",
      "searchString": "\u003cp\u003eHTTP header key \u003ccode\u003eif-unmodified-since\u003c/code\u003e\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "LAST_MODIFIED",
      "searchString": "\u003cp\u003eHTTP header key \u003ccode\u003elast-modified\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "LOCATION",
      "searchString": "\u003cp\u003eHTTP header key \u003ccode\u003elocation\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "PRAGMA",
      "searchString": "\u003cp\u003eHTTP header key \u003ccode\u003epragma\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "SERVER",
      "searchString": "\u003cp\u003eHTTP header key \u003ccode\u003eserver\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "WARNING",
      "searchString": "\u003cp\u003eHTTP header key \u003ccode\u003ewarning\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "TRANSFER_ENCODING",
      "searchString": "\u003cp\u003eHTTP header key \u003ccode\u003etransfer-encoding\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "CONNECTION",
      "searchString": "\u003cp\u003eHTTP header key \u003ccode\u003econnection\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "UPGRADE",
      "searchString": "\u003cp\u003eHTTP header key \u003ccode\u003eupgrade\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "PASSED",
      "searchString": "\u003cp\u003eMutual SSL handshake is successful.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "FAILED",
      "searchString": "\u003cp\u003eMutual SSL handshake has failed.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "NONE",
      "searchString": "\u003cp\u003eNot a mutual ssl connection.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "CB_OPEN_STATE",
      "searchString": "\u003cp\u003eRepresents the open state of the circuit.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "CB_HALF_OPEN_STATE",
      "searchString": "\u003cp\u003eRepresents the half-open state of the circuit.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "CB_CLOSED_STATE",
      "searchString": "\u003cp\u003eRepresents the closed state of the circuit.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "STATUS_CONTINUE",
      "searchString": "\u003cp\u003eThe HTTP response status code: 100 Continue\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_SWITCHING_PROTOCOLS",
      "searchString": "\u003cp\u003eThe HTTP response status code: 101 Switching Protocols\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_OK",
      "searchString": "\u003cp\u003eThe HTTP response status code: 200 OK\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_CREATED",
      "searchString": "\u003cp\u003eThe HTTP response status code: 201 Created\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_ACCEPTED",
      "searchString": "\u003cp\u003eThe HTTP response status code: 202 Accepted\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_NON_AUTHORITATIVE_INFORMATION",
      "searchString": "\u003cp\u003eThe HTTP response status code: 203 Non Authoritative Information\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_NO_CONTENT",
      "searchString": "\u003cp\u003eThe HTTP response status code: 204 No Content\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_RESET_CONTENT",
      "searchString": "\u003cp\u003eThe HTTP response status code: 205 Reset Content\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_PARTIAL_CONTENT",
      "searchString": "\u003cp\u003eThe HTTP response status code: 206 Partial Content\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_MULTIPLE_CHOICES",
      "searchString": "\u003cp\u003eThe HTTP response status code: 300 Multiple Choices\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_MOVED_PERMANENTLY",
      "searchString": "\u003cp\u003eThe HTTP response status code: 301 Moved Permanently\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_FOUND",
      "searchString": "\u003cp\u003eThe HTTP response status code: 302 Found\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_SEE_OTHER",
      "searchString": "\u003cp\u003eThe HTTP response status code: 303 See Other\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_NOT_MODIFIED",
      "searchString": "\u003cp\u003eThe HTTP response status code: 304 Not Modified\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_USE_PROXY",
      "searchString": "\u003cp\u003eThe HTTP response status code: 305 Use Proxy\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_TEMPORARY_REDIRECT",
      "searchString": "\u003cp\u003eThe HTTP response status code: 307 Temporary Redirect\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_PERMANENT_REDIRECT",
      "searchString": "\u003cp\u003eThe HTTP response status code: 308 Permanent Redirect\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_BAD_REQUEST",
      "searchString": "\u003cp\u003eThe HTTP response status code: 400 Bad Request\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_UNAUTHORIZED",
      "searchString": "\u003cp\u003eThe HTTP response status code: 401 Unauthorized\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_PAYMENT_REQUIRED",
      "searchString": "\u003cp\u003eThe HTTP response status code: 402 Payment Required\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_FORBIDDEN",
      "searchString": "\u003cp\u003eThe HTTP response status code: 403 Forbidden\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_NOT_FOUND",
      "searchString": "\u003cp\u003eThe HTTP response status code: 404 Not Found\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_METHOD_NOT_ALLOWED",
      "searchString": "\u003cp\u003eThe HTTP response status code: 405 Method Not Allowed\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_NOT_ACCEPTABLE",
      "searchString": "\u003cp\u003eThe HTTP response status code: 406 Not Acceptable\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_PROXY_AUTHENTICATION_REQUIRED",
      "searchString": "\u003cp\u003eThe HTTP response status code: 407 Proxy Authentication Required\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_REQUEST_TIMEOUT",
      "searchString": "\u003cp\u003eThe HTTP response status code: 408 Request Timeout\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_CONFLICT",
      "searchString": "\u003cp\u003eThe HTTP response status code: 409 Conflict\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_GONE",
      "searchString": "\u003cp\u003eThe HTTP response status code: 410 Gone\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_LENGTH_REQUIRED",
      "searchString": "\u003cp\u003eThe HTTP response status code: 411 Length Required\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_PRECONDITION_FAILED",
      "searchString": "\u003cp\u003eThe HTTP response status code: 412 Precondition Failed\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_PAYLOAD_TOO_LARGE",
      "searchString": "\u003cp\u003eThe HTTP response status code: 413 Payload Too Large\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_URI_TOO_LONG",
      "searchString": "\u003cp\u003eThe HTTP response status code: 414 URI Too Long\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_UNSUPPORTED_MEDIA_TYPE",
      "searchString": "\u003cp\u003eThe HTTP response status code: 415 Unsupported Media Type\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_RANGE_NOT_SATISFIABLE",
      "searchString": "\u003cp\u003eThe HTTP response status code: 416 Range Not Satisfiable\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_EXPECTATION_FAILED",
      "searchString": "\u003cp\u003eThe HTTP response status code: 417 Expectation Failed\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_UPGRADE_REQUIRED",
      "searchString": "\u003cp\u003eThe HTTP response status code: 426 Upgrade Required\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_INTERNAL_SERVER_ERROR",
      "searchString": "\u003cp\u003eThe HTTP response status code: 500 Internal Server Error\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_NOT_IMPLEMENTED",
      "searchString": "\u003cp\u003eThe HTTP response status code: 501 Not Implemented\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_BAD_GATEWAY",
      "searchString": "\u003cp\u003eThe HTTP response status code: 502 Bad Gateway\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_SERVICE_UNAVAILABLE",
      "searchString": "\u003cp\u003eThe HTTP response status code: 503 Service Unavailable\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_GATEWAY_TIMEOUT",
      "searchString": "\u003cp\u003eThe HTTP response status code: 504 Gateway Timeout\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "STATUS_HTTP_VERSION_NOT_SUPPORTED",
      "searchString": "\u003cp\u003eThe HTTP response status code: 505 HTTP Version Not Supported\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "KEEPALIVE_AUTO",
      "searchString": "\u003cp\u003eDecides to keep the connection alive or not based on the \u003ccode\u003econnection\u003c/code\u003e header of the client request }\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "KEEPALIVE_ALWAYS",
      "searchString": "\u003cp\u003eKeeps the connection alive irrespective of the \u003ccode\u003econnection\u003c/code\u003e header value }\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "KEEPALIVE_NEVER",
      "searchString": "\u003cp\u003eCloses the connection irrespective of the \u003ccode\u003econnection\u003c/code\u003e header value }\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "SERVICE_NAME",
      "searchString": "\u003cp\u003eConstant for the service name reference.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "RESOURCE_NAME",
      "searchString": "\u003cp\u003eConstant for the resource name reference.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "REQUEST_METHOD",
      "searchString": "\u003cp\u003eConstant for the request method reference.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "DEFAULT",
      "searchString": "\u003cp\u003eDefault value is the format specified by the CSVChannel.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "CSV",
      "searchString": "\u003cp\u003eField separator will be \u0026quot;,\u0026quot; and the record separator will be a new line.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "TDF",
      "searchString": "\u003cp\u003eField separator will be a tab and the record separator will be a new line.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "COMMA",
      "searchString": "\u003cp\u003eComma (,) will be used as the field separator.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "TAB",
      "searchString": "\u003cp\u003eTab (/t) will be use as the field separator.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "COLON",
      "searchString": "\u003cp\u003eColon (:) will be use as the field separator.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "CSV_RECORD_SEPARATOR",
      "searchString": "\u003cp\u003eRepresents the record separator of the CSV file.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "FS_COLON",
      "searchString": "\u003cp\u003eRepresents the colon separator, which should be used to identify colon-separated files.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "MINIMUM_HEADER_COUNT",
      "searchString": "\u003cp\u003eRepresents the minimum number of headers, which will be included in the CSV.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "BIG_ENDIAN",
      "searchString": "\u003cp\u003eSpecifies the bytes to be in the order of most significant byte first.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "LITTLE_ENDIAN",
      "searchString": "\u003cp\u003eSpecifies the byte order to be the least significant byte first.\u003c/p\u003e",
      "moduleId": "io"
    }
  ],
  "errors": [
    {
      "id": "AuthError",
      "searchString": "\u003cp\u003eRepresents the Auth error.\u003c/p\u003e",
      "moduleId": "auth"
    },
    {
      "id": "AllLoadBalanceEndpointsFailedError",
      "searchString": "\u003cp\u003eRepresents a client error that occurred due to all the load balance endpoint failure\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "AllRetryAttemptsFailed",
      "searchString": "\u003cp\u003eRepresents a client error that occurred due to all the the retry attempts failure\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "AuthenticationError",
      "searchString": "\u003cp\u003eRepresents a listener error that occurred due to inbound request authentication failure\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "AuthorizationError",
      "searchString": "\u003cp\u003eRepresents a listener error that occurred due to inbound request authorization failure\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "CircuitBreakerConfigError",
      "searchString": "\u003cp\u003eRepresents a client error that occurred due to circuit breaker configuration error.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "CookieHandlingError",
      "searchString": "\u003cp\u003eRepresents a cookie error that occurred when using the cookies\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "FailoverActionFailedError",
      "searchString": "\u003cp\u003eRepresents a client error that occurred due to failover action failure\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "FailoverAllEndpointsFailedError",
      "searchString": "\u003cp\u003eRepresents a client error that occurred due to all the failover endpoint failure\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "GenericClientError",
      "searchString": "\u003cp\u003eRepresents a generic client error\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "GenericListenerError",
      "searchString": "\u003cp\u003eRepresents a generic listener error\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "Http2ClientError",
      "searchString": "\u003cp\u003eRepresents an HTTP/2 client generic error\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "IdleTimeoutError",
      "searchString": "\u003cp\u003eRepresents the error that triggered upon a request/response idle timeout\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "InitializingInboundRequestError",
      "searchString": "\u003cp\u003eRepresents a listener error that occurred due to inbound request initialization failure\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "InitializingInboundResponseError",
      "searchString": "\u003cp\u003eRepresents a client error that occurred due to inbound response initialization failure\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "InitializingOutboundRequestError",
      "searchString": "\u003cp\u003eRepresents a client error that occurred due to outbound request initialization failure\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "InitializingOutboundResponseError",
      "searchString": "\u003cp\u003eRepresents a listener error that occurred due to outbound response initialization failure\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "Initiating100ContinueResponseError",
      "searchString": "\u003cp\u003eRepresents an error that occurred due to 100 continue response initialization failure\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "InvalidCookieError",
      "searchString": "\u003cp\u003eRepresents a cookie error that occurred when sending cookies in the response\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "LoadBalanceActionError",
      "searchString": "\u003cp\u003eRepresents an error occurred in an remote function of the Load Balance connector.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "MaximumWaitTimeExceededError",
      "searchString": "\u003cp\u003eRepresents a client error that occurred exceeding maximum wait time\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "ReadingInboundRequestBodyError",
      "searchString": "\u003cp\u003eRepresents a listener error that occurred while writing the inbound request entity body\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "ReadingInboundRequestHeadersError",
      "searchString": "\u003cp\u003eRepresents a listener error that occurred while reading inbound request headers\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "ReadingInboundResponseBodyError",
      "searchString": "\u003cp\u003eRepresents a client error that occurred while reading inbound response entity body\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "ReadingInboundResponseHeadersError",
      "searchString": "\u003cp\u003eRepresents a client error that occurred while reading inbound response headers\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "SslError",
      "searchString": "\u003cp\u003eRepresents a client error that occurred due to SSL failure\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "UnsupportedActionError",
      "searchString": "\u003cp\u003eRepresents a client error that occurred due to unsupported action invocation\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "UpstreamServiceUnavailableError",
      "searchString": "\u003cp\u003eRepresents a client error that occurred due to upstream service unavailability\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "Writing100ContinueResponseError",
      "searchString": "\u003cp\u003eRepresents an error that occurred while writing 100 continue response\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "WritingOutboundRequestBodyError",
      "searchString": "\u003cp\u003eRepresents a client error that occurred while writing outbound request entity body\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "WritingOutboundRequestHeadersError",
      "searchString": "\u003cp\u003eRepresents a client error that occurred while writing outbound request headers\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "WritingOutboundResponseBodyError",
      "searchString": "\u003cp\u003eRepresents a listener error that occurred while writing outbound response entity body\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "WritingOutboundResponseHeadersError",
      "searchString": "\u003cp\u003eRepresents a listener error that occurred while writing outbound response headers\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "WsConnectionClosureError",
      "searchString": "\u003cp\u003eRaised during failures in connection closure\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "WsConnectionError",
      "searchString": "\u003cp\u003eRaised during connection failures\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "WsGenericError",
      "searchString": "\u003cp\u003eRaised for errors not captured by the specific errors\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "WsInvalidContinuationFrameError",
      "searchString": "\u003cp\u003eRaised when an out of order/invalid continuation frame is received\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "WsInvalidHandshakeError",
      "searchString": "\u003cp\u003eRaised during the handshake when the WebSocket upgrade fails\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "WsPayloadTooBigError",
      "searchString": "\u003cp\u003eRaised when receiving a frame with a payload exceeding the maximum size\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "WsProtocolError",
      "searchString": "\u003cp\u003eRaised when the other side breaks the protocol\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "AccessDeniedError",
      "searchString": "\u003cp\u003eThis will get returned due to file permission issues.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "ConnectionTimedOutError",
      "searchString": "\u003cp\u003eThis will return when connection timed out happen when try to connect to a remote host.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "EofError",
      "searchString": "\u003cp\u003eThis will get returned if read operations are performed on a channel after it closed.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "FileNotFoundError",
      "searchString": "\u003cp\u003eThis will get returned if the file is not available in the given file path.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "GenericError",
      "searchString": "\u003cp\u003eRepresents generic IO error.\u003c/p\u003e",
      "moduleId": "io"
    }
  ],
  "types": [
    {
      "id": "Error",
      "searchString": "\u003cp\u003eRepresents the Auth module related error.\u003c/p\u003e",
      "moduleId": "auth"
    },
    {
      "id": "CachingPolicy",
      "searchString": "\u003cp\u003eUsed for configuring the caching behaviour.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "Chunking",
      "searchString": "\u003cp\u003eDefines the possible values for the chunking configuration in HTTP services and clients.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "CircuitState",
      "searchString": "\u003cp\u003eA finite type for modeling the states of the Circuit Breaker.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "ClientAuthError",
      "searchString": "\u003cp\u003eDefines the Auth error types that returned from client\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "ClientError",
      "searchString": "\u003cp\u003eDefines the possible client error types\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "Compression",
      "searchString": "\u003cp\u003eOptions to compress using gzip or deflate.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "CredentialBearer",
      "searchString": "\u003cp\u003eSpecifies how to send the authentication credentials when exchanging tokens.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "HttpOperation",
      "searchString": "\u003cp\u003eDefines the HTTP operations related to circuit breaker, failover and load balancer.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "HttpVersion",
      "searchString": "\u003cp\u003eDefines the supported HTTP protocols.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "InboundAuthHandlers",
      "searchString": "\u003cp\u003eRepresents inbound auth handler patterns.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "InboundRequestError",
      "searchString": "\u003cp\u003eDefines the listener error types that returned while receiving inbound request\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "InboundResponseError",
      "searchString": "\u003cp\u003eDefines the client error types that returned while receiving inbound response\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "KeepAlive",
      "searchString": "\u003cp\u003eDefines the possible values for the keep-alive configuration in service and client endpoints.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "ListenerError",
      "searchString": "\u003cp\u003eDefines the possible listener error types\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "MutualSslStatus",
      "searchString": "\u003cp\u003eDefines the possible values for the mutual ssl status.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "OutboundRequestError",
      "searchString": "\u003cp\u003eDefines the client error types that returned while sending outbound request\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "OutboundResponseError",
      "searchString": "\u003cp\u003eDefines the listener error types that returned while sending outbound response\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "RedirectCode",
      "searchString": "\u003cp\u003eDefines the HTTP redirect codes as a type.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "RequestMessage",
      "searchString": "\u003cp\u003eThe types of messages that are accepted by HTTP \u003ccode\u003eclient\u003c/code\u003e when sending out the outbound request.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "ResiliencyError",
      "searchString": "\u003cp\u003eDefines the resiliency error types that returned from client\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "ResponseMessage",
      "searchString": "\u003cp\u003eThe types of messages that are accepted by HTTP \u003ccode\u003elistener\u003c/code\u003e when sending out the outbound response.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "Scopes",
      "searchString": "\u003cp\u003eRepresents scopes patterns.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "WebSocketError",
      "searchString": "\u003cp\u003eThe union of all the WebSocket related errors\u003c/p\u003e\n",
      "moduleId": "http"
    },
    {
      "id": "Error",
      "searchString": "\u003cp\u003eRepresents IO module related errors.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "Format",
      "searchString": "\u003cp\u003eThe format, which will be used to represent the CSV.\u003c/p\u003e",
      "moduleId": "io"
    },
    {
      "id": "Separator",
      "searchString": "\u003cp\u003eField separators, which are supported by the \u003ccode\u003eDelimitedTextRecordChannel\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "io"
    }
  ],
  "clients": [
    {
      "id": "Caller",
      "searchString": "\u003cp\u003eThe caller actions for responding to client requests.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "CircuitBreakerClient",
      "searchString": "\u003cp\u003eA Circuit Breaker implementation which can be used to gracefully handle network failures.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "Client",
      "searchString": "\u003cp\u003eThe HTTP client provides the capability for initiating contact with a remote HTTP service.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "CookieClient",
      "searchString": "\u003cp\u003eProvides the cookie functionality across HTTP client actions.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "FailoverClient",
      "searchString": "\u003cp\u003eAn HTTP client endpoint which provides failover support over multiple HTTP clients.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "HttpCachingClient",
      "searchString": "\u003cp\u003eAn HTTP caching client implementation which takes an \u003ccode\u003eHttpActions\u003c/code\u003e instance and wraps it with an HTTP caching layer.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "HttpClient",
      "searchString": "\u003cp\u003eProvides the HTTP actions for interacting with an HTTP server.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "HttpSecureClient",
      "searchString": "\u003cp\u003eProvides secure HTTP remote functions for interacting with HTTP endpoints.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "LoadBalanceClient",
      "searchString": "\u003cp\u003eLoadBalanceClient endpoint provides load balancing functionality over multiple HTTP clients.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "RedirectClient",
      "searchString": "\u003cp\u003eProvides redirect functionality for HTTP client remote functions.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "RetryClient",
      "searchString": "\u003cp\u003eProvides the HTTP remote functions for interacting with an HTTP endpoint.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "WebSocketCaller",
      "searchString": "\u003cp\u003eRepresents a WebSocket caller.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "WebSocketClient",
      "searchString": "\u003cp\u003eRepresents a WebSocket client endpoint.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "WebSocketFailoverClient",
      "searchString": "\u003cp\u003eA WebSocket client endpoint, which provides failover support for multiple WebSocket targets.\u003c/p\u003e",
      "moduleId": "http"
    }
  ],
  "listeners": [
    {
      "id": "Listener",
      "searchString": "\u003cp\u003eThis is used for creating HTTP server endpoints.\u003c/p\u003e",
      "moduleId": "http"
    },
    {
      "id": "MockListener",
      "searchString": "\u003cp\u003eMock server endpoint which does not open a listening port.\u003c/p\u003e",
      "moduleId": "http"
    }
  ]
};