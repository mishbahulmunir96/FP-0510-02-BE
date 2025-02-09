
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Sample
 * 
 */
export type Sample = $Result.DefaultSelection<Prisma.$SamplePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model PropertyCategory
 * 
 */
export type PropertyCategory = $Result.DefaultSelection<Prisma.$PropertyCategoryPayload>
/**
 * Model PropertyImage
 * 
 */
export type PropertyImage = $Result.DefaultSelection<Prisma.$PropertyImagePayload>
/**
 * Model PropertyFacility
 * 
 */
export type PropertyFacility = $Result.DefaultSelection<Prisma.$PropertyFacilityPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model PeakSeasonRate
 * 
 */
export type PeakSeasonRate = $Result.DefaultSelection<Prisma.$PeakSeasonRatePayload>
/**
 * Model RoomFacility
 * 
 */
export type RoomFacility = $Result.DefaultSelection<Prisma.$RoomFacilityPayload>
/**
 * Model RoomImage
 * 
 */
export type RoomImage = $Result.DefaultSelection<Prisma.$RoomImagePayload>
/**
 * Model RoomNonAvailability
 * 
 */
export type RoomNonAvailability = $Result.DefaultSelection<Prisma.$RoomNonAvailabilityPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  TENANT: 'TENANT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Provider: {
  CREDENTIAL: 'CREDENTIAL',
  GOOGLE: 'GOOGLE'
};

export type Provider = (typeof Provider)[keyof typeof Provider]


export const StatusProperty: {
  PUBLISHED: 'PUBLISHED',
  DRAFT: 'DRAFT'
};

export type StatusProperty = (typeof StatusProperty)[keyof typeof StatusProperty]


export const Type: {
  Deluxe: 'Deluxe',
  Standard: 'Standard',
  Suite: 'Suite'
};

export type Type = (typeof Type)[keyof typeof Type]


export const PaymentMethode: {
  MANUAL: 'MANUAL',
  OTOMATIS: 'OTOMATIS'
};

export type PaymentMethode = (typeof PaymentMethode)[keyof typeof PaymentMethode]


export const StatusPayment: {
  WAITING_FOR_PAYMENT: 'WAITING_FOR_PAYMENT',
  WAITING_FOR_PAYMENT_CONFIRMATION: 'WAITING_FOR_PAYMENT_CONFIRMATION',
  CANCELLED: 'CANCELLED',
  PROCESSED: 'PROCESSED',
  CHECKED_IN: 'CHECKED_IN',
  CHECKED_OUT: 'CHECKED_OUT'
};

export type StatusPayment = (typeof StatusPayment)[keyof typeof StatusPayment]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Provider = $Enums.Provider

export const Provider: typeof $Enums.Provider

export type StatusProperty = $Enums.StatusProperty

export const StatusProperty: typeof $Enums.StatusProperty

export type Type = $Enums.Type

export const Type: typeof $Enums.Type

export type PaymentMethode = $Enums.PaymentMethode

export const PaymentMethode: typeof $Enums.PaymentMethode

export type StatusPayment = $Enums.StatusPayment

export const StatusPayment: typeof $Enums.StatusPayment

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Samples
 * const samples = await prisma.sample.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Samples
   * const samples = await prisma.sample.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.sample`: Exposes CRUD operations for the **Sample** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Samples
    * const samples = await prisma.sample.findMany()
    * ```
    */
  get sample(): Prisma.SampleDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs>;

  /**
   * `prisma.propertyCategory`: Exposes CRUD operations for the **PropertyCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyCategories
    * const propertyCategories = await prisma.propertyCategory.findMany()
    * ```
    */
  get propertyCategory(): Prisma.PropertyCategoryDelegate<ExtArgs>;

  /**
   * `prisma.propertyImage`: Exposes CRUD operations for the **PropertyImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyImages
    * const propertyImages = await prisma.propertyImage.findMany()
    * ```
    */
  get propertyImage(): Prisma.PropertyImageDelegate<ExtArgs>;

  /**
   * `prisma.propertyFacility`: Exposes CRUD operations for the **PropertyFacility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyFacilities
    * const propertyFacilities = await prisma.propertyFacility.findMany()
    * ```
    */
  get propertyFacility(): Prisma.PropertyFacilityDelegate<ExtArgs>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs>;

  /**
   * `prisma.peakSeasonRate`: Exposes CRUD operations for the **PeakSeasonRate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PeakSeasonRates
    * const peakSeasonRates = await prisma.peakSeasonRate.findMany()
    * ```
    */
  get peakSeasonRate(): Prisma.PeakSeasonRateDelegate<ExtArgs>;

  /**
   * `prisma.roomFacility`: Exposes CRUD operations for the **RoomFacility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomFacilities
    * const roomFacilities = await prisma.roomFacility.findMany()
    * ```
    */
  get roomFacility(): Prisma.RoomFacilityDelegate<ExtArgs>;

  /**
   * `prisma.roomImage`: Exposes CRUD operations for the **RoomImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomImages
    * const roomImages = await prisma.roomImage.findMany()
    * ```
    */
  get roomImage(): Prisma.RoomImageDelegate<ExtArgs>;

  /**
   * `prisma.roomNonAvailability`: Exposes CRUD operations for the **RoomNonAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomNonAvailabilities
    * const roomNonAvailabilities = await prisma.roomNonAvailability.findMany()
    * ```
    */
  get roomNonAvailability(): Prisma.RoomNonAvailabilityDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.0.1
   * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Sample: 'Sample',
    User: 'User',
    Tenant: 'Tenant',
    Property: 'Property',
    PropertyCategory: 'PropertyCategory',
    PropertyImage: 'PropertyImage',
    PropertyFacility: 'PropertyFacility',
    Room: 'Room',
    PeakSeasonRate: 'PeakSeasonRate',
    RoomFacility: 'RoomFacility',
    RoomImage: 'RoomImage',
    RoomNonAvailability: 'RoomNonAvailability',
    Payment: 'Payment',
    Reservation: 'Reservation',
    Review: 'Review'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "sample" | "user" | "tenant" | "property" | "propertyCategory" | "propertyImage" | "propertyFacility" | "room" | "peakSeasonRate" | "roomFacility" | "roomImage" | "roomNonAvailability" | "payment" | "reservation" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Sample: {
        payload: Prisma.$SamplePayload<ExtArgs>
        fields: Prisma.SampleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SampleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SampleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>
          }
          findFirst: {
            args: Prisma.SampleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SampleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>
          }
          findMany: {
            args: Prisma.SampleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>[]
          }
          create: {
            args: Prisma.SampleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>
          }
          createMany: {
            args: Prisma.SampleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SampleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>[]
          }
          delete: {
            args: Prisma.SampleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>
          }
          update: {
            args: Prisma.SampleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>
          }
          deleteMany: {
            args: Prisma.SampleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SampleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SampleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>
          }
          aggregate: {
            args: Prisma.SampleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSample>
          }
          groupBy: {
            args: Prisma.SampleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SampleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SampleCountArgs<ExtArgs>
            result: $Utils.Optional<SampleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      PropertyCategory: {
        payload: Prisma.$PropertyCategoryPayload<ExtArgs>
        fields: Prisma.PropertyCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload>
          }
          findFirst: {
            args: Prisma.PropertyCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload>
          }
          findMany: {
            args: Prisma.PropertyCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload>[]
          }
          create: {
            args: Prisma.PropertyCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload>
          }
          createMany: {
            args: Prisma.PropertyCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload>[]
          }
          delete: {
            args: Prisma.PropertyCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload>
          }
          update: {
            args: Prisma.PropertyCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload>
          }
          deleteMany: {
            args: Prisma.PropertyCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload>
          }
          aggregate: {
            args: Prisma.PropertyCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyCategory>
          }
          groupBy: {
            args: Prisma.PropertyCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCategoryCountAggregateOutputType> | number
          }
        }
      }
      PropertyImage: {
        payload: Prisma.$PropertyImagePayload<ExtArgs>
        fields: Prisma.PropertyImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          findFirst: {
            args: Prisma.PropertyImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          findMany: {
            args: Prisma.PropertyImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>[]
          }
          create: {
            args: Prisma.PropertyImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          createMany: {
            args: Prisma.PropertyImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>[]
          }
          delete: {
            args: Prisma.PropertyImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          update: {
            args: Prisma.PropertyImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          deleteMany: {
            args: Prisma.PropertyImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          aggregate: {
            args: Prisma.PropertyImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyImage>
          }
          groupBy: {
            args: Prisma.PropertyImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyImageCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyImageCountAggregateOutputType> | number
          }
        }
      }
      PropertyFacility: {
        payload: Prisma.$PropertyFacilityPayload<ExtArgs>
        fields: Prisma.PropertyFacilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFacilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyFacilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFacilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyFacilityPayload>
          }
          findFirst: {
            args: Prisma.PropertyFacilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyFacilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFacilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyFacilityPayload>
          }
          findMany: {
            args: Prisma.PropertyFacilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyFacilityPayload>[]
          }
          create: {
            args: Prisma.PropertyFacilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyFacilityPayload>
          }
          createMany: {
            args: Prisma.PropertyFacilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyFacilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyFacilityPayload>[]
          }
          delete: {
            args: Prisma.PropertyFacilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyFacilityPayload>
          }
          update: {
            args: Prisma.PropertyFacilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyFacilityPayload>
          }
          deleteMany: {
            args: Prisma.PropertyFacilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyFacilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyFacilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyFacilityPayload>
          }
          aggregate: {
            args: Prisma.PropertyFacilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyFacility>
          }
          groupBy: {
            args: Prisma.PropertyFacilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyFacilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyFacilityCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyFacilityCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      PeakSeasonRate: {
        payload: Prisma.$PeakSeasonRatePayload<ExtArgs>
        fields: Prisma.PeakSeasonRateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeakSeasonRateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonRatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeakSeasonRateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonRatePayload>
          }
          findFirst: {
            args: Prisma.PeakSeasonRateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonRatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeakSeasonRateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonRatePayload>
          }
          findMany: {
            args: Prisma.PeakSeasonRateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonRatePayload>[]
          }
          create: {
            args: Prisma.PeakSeasonRateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonRatePayload>
          }
          createMany: {
            args: Prisma.PeakSeasonRateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeakSeasonRateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonRatePayload>[]
          }
          delete: {
            args: Prisma.PeakSeasonRateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonRatePayload>
          }
          update: {
            args: Prisma.PeakSeasonRateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonRatePayload>
          }
          deleteMany: {
            args: Prisma.PeakSeasonRateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeakSeasonRateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PeakSeasonRateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonRatePayload>
          }
          aggregate: {
            args: Prisma.PeakSeasonRateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeakSeasonRate>
          }
          groupBy: {
            args: Prisma.PeakSeasonRateGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeakSeasonRateGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeakSeasonRateCountArgs<ExtArgs>
            result: $Utils.Optional<PeakSeasonRateCountAggregateOutputType> | number
          }
        }
      }
      RoomFacility: {
        payload: Prisma.$RoomFacilityPayload<ExtArgs>
        fields: Prisma.RoomFacilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFacilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomFacilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFacilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomFacilityPayload>
          }
          findFirst: {
            args: Prisma.RoomFacilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomFacilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFacilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomFacilityPayload>
          }
          findMany: {
            args: Prisma.RoomFacilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomFacilityPayload>[]
          }
          create: {
            args: Prisma.RoomFacilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomFacilityPayload>
          }
          createMany: {
            args: Prisma.RoomFacilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomFacilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomFacilityPayload>[]
          }
          delete: {
            args: Prisma.RoomFacilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomFacilityPayload>
          }
          update: {
            args: Prisma.RoomFacilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomFacilityPayload>
          }
          deleteMany: {
            args: Prisma.RoomFacilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomFacilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomFacilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomFacilityPayload>
          }
          aggregate: {
            args: Prisma.RoomFacilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomFacility>
          }
          groupBy: {
            args: Prisma.RoomFacilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomFacilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomFacilityCountArgs<ExtArgs>
            result: $Utils.Optional<RoomFacilityCountAggregateOutputType> | number
          }
        }
      }
      RoomImage: {
        payload: Prisma.$RoomImagePayload<ExtArgs>
        fields: Prisma.RoomImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>
          }
          findFirst: {
            args: Prisma.RoomImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>
          }
          findMany: {
            args: Prisma.RoomImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>[]
          }
          create: {
            args: Prisma.RoomImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>
          }
          createMany: {
            args: Prisma.RoomImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>[]
          }
          delete: {
            args: Prisma.RoomImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>
          }
          update: {
            args: Prisma.RoomImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>
          }
          deleteMany: {
            args: Prisma.RoomImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>
          }
          aggregate: {
            args: Prisma.RoomImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomImage>
          }
          groupBy: {
            args: Prisma.RoomImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomImageCountArgs<ExtArgs>
            result: $Utils.Optional<RoomImageCountAggregateOutputType> | number
          }
        }
      }
      RoomNonAvailability: {
        payload: Prisma.$RoomNonAvailabilityPayload<ExtArgs>
        fields: Prisma.RoomNonAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomNonAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomNonAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomNonAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomNonAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.RoomNonAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomNonAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomNonAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomNonAvailabilityPayload>
          }
          findMany: {
            args: Prisma.RoomNonAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomNonAvailabilityPayload>[]
          }
          create: {
            args: Prisma.RoomNonAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomNonAvailabilityPayload>
          }
          createMany: {
            args: Prisma.RoomNonAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomNonAvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomNonAvailabilityPayload>[]
          }
          delete: {
            args: Prisma.RoomNonAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomNonAvailabilityPayload>
          }
          update: {
            args: Prisma.RoomNonAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomNonAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.RoomNonAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomNonAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomNonAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomNonAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.RoomNonAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomNonAvailability>
          }
          groupBy: {
            args: Prisma.RoomNonAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomNonAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomNonAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<RoomNonAvailabilityCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    review: number
    payment: number
    Tenant: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | UserCountOutputTypeCountReviewArgs
    payment?: boolean | UserCountOutputTypeCountPaymentArgs
    Tenant?: boolean | UserCountOutputTypeCountTenantArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
  }


  /**
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    property: number
    PropertyCategory: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | TenantCountOutputTypeCountPropertyArgs
    PropertyCategory?: boolean | TenantCountOutputTypeCountPropertyCategoryArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountPropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountPropertyCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyCategoryWhereInput
  }


  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    propertyImage: number
    propertyFacility: number
    room: number
    review: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propertyImage?: boolean | PropertyCountOutputTypeCountPropertyImageArgs
    propertyFacility?: boolean | PropertyCountOutputTypeCountPropertyFacilityArgs
    room?: boolean | PropertyCountOutputTypeCountRoomArgs
    review?: boolean | PropertyCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountPropertyImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyImageWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountPropertyFacilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyFacilityWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type PropertyCategoryCountOutputType
   */

  export type PropertyCategoryCountOutputType = {
    properties: number
  }

  export type PropertyCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | PropertyCategoryCountOutputTypeCountPropertiesArgs
  }

  // Custom InputTypes
  /**
   * PropertyCategoryCountOutputType without action
   */
  export type PropertyCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategoryCountOutputType
     */
    select?: PropertyCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCategoryCountOutputType without action
   */
  export type PropertyCategoryCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    peakSeasonRate: number
    roomFacility: number
    roomImage: number
    roomNonAvailability: number
    reservation: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peakSeasonRate?: boolean | RoomCountOutputTypeCountPeakSeasonRateArgs
    roomFacility?: boolean | RoomCountOutputTypeCountRoomFacilityArgs
    roomImage?: boolean | RoomCountOutputTypeCountRoomImageArgs
    roomNonAvailability?: boolean | RoomCountOutputTypeCountRoomNonAvailabilityArgs
    reservation?: boolean | RoomCountOutputTypeCountReservationArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountPeakSeasonRateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeakSeasonRateWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountRoomFacilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomFacilityWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountRoomImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomImageWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountRoomNonAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomNonAvailabilityWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountReservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Count Type PaymentCountOutputType
   */

  export type PaymentCountOutputType = {
    review: number
    reservation: number
  }

  export type PaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | PaymentCountOutputTypeCountReviewArgs
    reservation?: boolean | PaymentCountOutputTypeCountReservationArgs
  }

  // Custom InputTypes
  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCountOutputType
     */
    select?: PaymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountReservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Sample
   */

  export type AggregateSample = {
    _count: SampleCountAggregateOutputType | null
    _avg: SampleAvgAggregateOutputType | null
    _sum: SampleSumAggregateOutputType | null
    _min: SampleMinAggregateOutputType | null
    _max: SampleMaxAggregateOutputType | null
  }

  export type SampleAvgAggregateOutputType = {
    id: number | null
  }

  export type SampleSumAggregateOutputType = {
    id: number | null
  }

  export type SampleMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SampleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SampleCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SampleAvgAggregateInputType = {
    id?: true
  }

  export type SampleSumAggregateInputType = {
    id?: true
  }

  export type SampleMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SampleMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SampleCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SampleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sample to aggregate.
     */
    where?: SampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Samples to fetch.
     */
    orderBy?: SampleOrderByWithRelationInput | SampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Samples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Samples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Samples
    **/
    _count?: true | SampleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SampleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SampleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SampleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SampleMaxAggregateInputType
  }

  export type GetSampleAggregateType<T extends SampleAggregateArgs> = {
        [P in keyof T & keyof AggregateSample]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSample[P]>
      : GetScalarType<T[P], AggregateSample[P]>
  }




  export type SampleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SampleWhereInput
    orderBy?: SampleOrderByWithAggregationInput | SampleOrderByWithAggregationInput[]
    by: SampleScalarFieldEnum[] | SampleScalarFieldEnum
    having?: SampleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SampleCountAggregateInputType | true
    _avg?: SampleAvgAggregateInputType
    _sum?: SampleSumAggregateInputType
    _min?: SampleMinAggregateInputType
    _max?: SampleMaxAggregateInputType
  }

  export type SampleGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: SampleCountAggregateOutputType | null
    _avg: SampleAvgAggregateOutputType | null
    _sum: SampleSumAggregateOutputType | null
    _min: SampleMinAggregateOutputType | null
    _max: SampleMaxAggregateOutputType | null
  }

  type GetSampleGroupByPayload<T extends SampleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SampleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SampleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SampleGroupByOutputType[P]>
            : GetScalarType<T[P], SampleGroupByOutputType[P]>
        }
      >
    >


  export type SampleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sample"]>

  export type SampleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sample"]>

  export type SampleSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SamplePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sample"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sample"]>
    composites: {}
  }

  type SampleGetPayload<S extends boolean | null | undefined | SampleDefaultArgs> = $Result.GetResult<Prisma.$SamplePayload, S>

  type SampleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SampleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SampleCountAggregateInputType | true
    }

  export interface SampleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sample'], meta: { name: 'Sample' } }
    /**
     * Find zero or one Sample that matches the filter.
     * @param {SampleFindUniqueArgs} args - Arguments to find a Sample
     * @example
     * // Get one Sample
     * const sample = await prisma.sample.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SampleFindUniqueArgs>(args: SelectSubset<T, SampleFindUniqueArgs<ExtArgs>>): Prisma__SampleClient<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Sample that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SampleFindUniqueOrThrowArgs} args - Arguments to find a Sample
     * @example
     * // Get one Sample
     * const sample = await prisma.sample.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SampleFindUniqueOrThrowArgs>(args: SelectSubset<T, SampleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SampleClient<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Sample that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleFindFirstArgs} args - Arguments to find a Sample
     * @example
     * // Get one Sample
     * const sample = await prisma.sample.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SampleFindFirstArgs>(args?: SelectSubset<T, SampleFindFirstArgs<ExtArgs>>): Prisma__SampleClient<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Sample that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleFindFirstOrThrowArgs} args - Arguments to find a Sample
     * @example
     * // Get one Sample
     * const sample = await prisma.sample.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SampleFindFirstOrThrowArgs>(args?: SelectSubset<T, SampleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SampleClient<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Samples that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Samples
     * const samples = await prisma.sample.findMany()
     * 
     * // Get first 10 Samples
     * const samples = await prisma.sample.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sampleWithIdOnly = await prisma.sample.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SampleFindManyArgs>(args?: SelectSubset<T, SampleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Sample.
     * @param {SampleCreateArgs} args - Arguments to create a Sample.
     * @example
     * // Create one Sample
     * const Sample = await prisma.sample.create({
     *   data: {
     *     // ... data to create a Sample
     *   }
     * })
     * 
     */
    create<T extends SampleCreateArgs>(args: SelectSubset<T, SampleCreateArgs<ExtArgs>>): Prisma__SampleClient<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Samples.
     * @param {SampleCreateManyArgs} args - Arguments to create many Samples.
     * @example
     * // Create many Samples
     * const sample = await prisma.sample.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SampleCreateManyArgs>(args?: SelectSubset<T, SampleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Samples and returns the data saved in the database.
     * @param {SampleCreateManyAndReturnArgs} args - Arguments to create many Samples.
     * @example
     * // Create many Samples
     * const sample = await prisma.sample.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Samples and only return the `id`
     * const sampleWithIdOnly = await prisma.sample.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SampleCreateManyAndReturnArgs>(args?: SelectSubset<T, SampleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Sample.
     * @param {SampleDeleteArgs} args - Arguments to delete one Sample.
     * @example
     * // Delete one Sample
     * const Sample = await prisma.sample.delete({
     *   where: {
     *     // ... filter to delete one Sample
     *   }
     * })
     * 
     */
    delete<T extends SampleDeleteArgs>(args: SelectSubset<T, SampleDeleteArgs<ExtArgs>>): Prisma__SampleClient<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Sample.
     * @param {SampleUpdateArgs} args - Arguments to update one Sample.
     * @example
     * // Update one Sample
     * const sample = await prisma.sample.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SampleUpdateArgs>(args: SelectSubset<T, SampleUpdateArgs<ExtArgs>>): Prisma__SampleClient<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Samples.
     * @param {SampleDeleteManyArgs} args - Arguments to filter Samples to delete.
     * @example
     * // Delete a few Samples
     * const { count } = await prisma.sample.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SampleDeleteManyArgs>(args?: SelectSubset<T, SampleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Samples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Samples
     * const sample = await prisma.sample.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SampleUpdateManyArgs>(args: SelectSubset<T, SampleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sample.
     * @param {SampleUpsertArgs} args - Arguments to update or create a Sample.
     * @example
     * // Update or create a Sample
     * const sample = await prisma.sample.upsert({
     *   create: {
     *     // ... data to create a Sample
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sample we want to update
     *   }
     * })
     */
    upsert<T extends SampleUpsertArgs>(args: SelectSubset<T, SampleUpsertArgs<ExtArgs>>): Prisma__SampleClient<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Samples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleCountArgs} args - Arguments to filter Samples to count.
     * @example
     * // Count the number of Samples
     * const count = await prisma.sample.count({
     *   where: {
     *     // ... the filter for the Samples we want to count
     *   }
     * })
    **/
    count<T extends SampleCountArgs>(
      args?: Subset<T, SampleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SampleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sample.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SampleAggregateArgs>(args: Subset<T, SampleAggregateArgs>): Prisma.PrismaPromise<GetSampleAggregateType<T>>

    /**
     * Group by Sample.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SampleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SampleGroupByArgs['orderBy'] }
        : { orderBy?: SampleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SampleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSampleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sample model
   */
  readonly fields: SampleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sample.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SampleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sample model
   */ 
  interface SampleFieldRefs {
    readonly id: FieldRef<"Sample", 'Int'>
    readonly name: FieldRef<"Sample", 'String'>
    readonly createdAt: FieldRef<"Sample", 'DateTime'>
    readonly updatedAt: FieldRef<"Sample", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sample findUnique
   */
  export type SampleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * Filter, which Sample to fetch.
     */
    where: SampleWhereUniqueInput
  }

  /**
   * Sample findUniqueOrThrow
   */
  export type SampleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * Filter, which Sample to fetch.
     */
    where: SampleWhereUniqueInput
  }

  /**
   * Sample findFirst
   */
  export type SampleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * Filter, which Sample to fetch.
     */
    where?: SampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Samples to fetch.
     */
    orderBy?: SampleOrderByWithRelationInput | SampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Samples.
     */
    cursor?: SampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Samples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Samples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Samples.
     */
    distinct?: SampleScalarFieldEnum | SampleScalarFieldEnum[]
  }

  /**
   * Sample findFirstOrThrow
   */
  export type SampleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * Filter, which Sample to fetch.
     */
    where?: SampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Samples to fetch.
     */
    orderBy?: SampleOrderByWithRelationInput | SampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Samples.
     */
    cursor?: SampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Samples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Samples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Samples.
     */
    distinct?: SampleScalarFieldEnum | SampleScalarFieldEnum[]
  }

  /**
   * Sample findMany
   */
  export type SampleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * Filter, which Samples to fetch.
     */
    where?: SampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Samples to fetch.
     */
    orderBy?: SampleOrderByWithRelationInput | SampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Samples.
     */
    cursor?: SampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Samples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Samples.
     */
    skip?: number
    distinct?: SampleScalarFieldEnum | SampleScalarFieldEnum[]
  }

  /**
   * Sample create
   */
  export type SampleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * The data needed to create a Sample.
     */
    data: XOR<SampleCreateInput, SampleUncheckedCreateInput>
  }

  /**
   * Sample createMany
   */
  export type SampleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Samples.
     */
    data: SampleCreateManyInput | SampleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sample createManyAndReturn
   */
  export type SampleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Samples.
     */
    data: SampleCreateManyInput | SampleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sample update
   */
  export type SampleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * The data needed to update a Sample.
     */
    data: XOR<SampleUpdateInput, SampleUncheckedUpdateInput>
    /**
     * Choose, which Sample to update.
     */
    where: SampleWhereUniqueInput
  }

  /**
   * Sample updateMany
   */
  export type SampleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Samples.
     */
    data: XOR<SampleUpdateManyMutationInput, SampleUncheckedUpdateManyInput>
    /**
     * Filter which Samples to update
     */
    where?: SampleWhereInput
  }

  /**
   * Sample upsert
   */
  export type SampleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * The filter to search for the Sample to update in case it exists.
     */
    where: SampleWhereUniqueInput
    /**
     * In case the Sample found by the `where` argument doesn't exist, create a new Sample with this data.
     */
    create: XOR<SampleCreateInput, SampleUncheckedCreateInput>
    /**
     * In case the Sample was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SampleUpdateInput, SampleUncheckedUpdateInput>
  }

  /**
   * Sample delete
   */
  export type SampleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * Filter which Sample to delete.
     */
    where: SampleWhereUniqueInput
  }

  /**
   * Sample deleteMany
   */
  export type SampleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Samples to delete
     */
    where?: SampleWhereInput
  }

  /**
   * Sample without action
   */
  export type SampleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    imageUrl: string | null
    token: string | null
    role: $Enums.Role | null
    provider: $Enums.Provider | null
    isVerified: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    imageUrl: string | null
    token: string | null
    role: $Enums.Role | null
    provider: $Enums.Provider | null
    isVerified: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    imageUrl: number
    token: number
    role: number
    provider: number
    isVerified: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    imageUrl?: true
    token?: true
    role?: true
    provider?: true
    isVerified?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    imageUrl?: true
    token?: true
    role?: true
    provider?: true
    isVerified?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    imageUrl?: true
    token?: true
    role?: true
    provider?: true
    isVerified?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string | null
    imageUrl: string | null
    token: string | null
    role: $Enums.Role
    provider: $Enums.Provider
    isVerified: boolean
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    imageUrl?: boolean
    token?: boolean
    role?: boolean
    provider?: boolean
    isVerified?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    review?: boolean | User$reviewArgs<ExtArgs>
    payment?: boolean | User$paymentArgs<ExtArgs>
    Tenant?: boolean | User$TenantArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    imageUrl?: boolean
    token?: boolean
    role?: boolean
    provider?: boolean
    isVerified?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    imageUrl?: boolean
    token?: boolean
    role?: boolean
    provider?: boolean
    isVerified?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | User$reviewArgs<ExtArgs>
    payment?: boolean | User$paymentArgs<ExtArgs>
    Tenant?: boolean | User$TenantArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>[]
      payment: Prisma.$PaymentPayload<ExtArgs>[]
      Tenant: Prisma.$TenantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string | null
      imageUrl: string | null
      token: string | null
      role: $Enums.Role
      provider: $Enums.Provider
      isVerified: boolean
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends User$reviewArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    payment<T extends User$paymentArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany"> | Null>
    Tenant<T extends User$TenantArgs<ExtArgs> = {}>(args?: Subset<T, User$TenantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly token: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly provider: FieldRef<"User", 'Provider'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly isDeleted: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.review
   */
  export type User$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.payment
   */
  export type User$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.Tenant
   */
  export type User$TenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    cursor?: TenantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _avg: TenantAvgAggregateOutputType | null
    _sum: TenantSumAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    balance: number | null
  }

  export type TenantSumAggregateOutputType = {
    id: number | null
    userId: number | null
    balance: number | null
  }

  export type TenantMinAggregateOutputType = {
    id: number | null
    name: string | null
    imageUrl: string | null
    phoneNumber: string | null
    bankName: string | null
    bankNumber: string | null
    userId: number | null
    balance: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: number | null
    name: string | null
    imageUrl: string | null
    phoneNumber: string | null
    bankName: string | null
    bankNumber: string | null
    userId: number | null
    balance: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    imageUrl: number
    phoneNumber: number
    bankName: number
    bankNumber: number
    userId: number
    balance: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantAvgAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
  }

  export type TenantSumAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
  }

  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    phoneNumber?: true
    bankName?: true
    bankNumber?: true
    userId?: true
    balance?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    phoneNumber?: true
    bankName?: true
    bankNumber?: true
    userId?: true
    balance?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    phoneNumber?: true
    bankName?: true
    bankNumber?: true
    userId?: true
    balance?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TenantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TenantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _avg?: TenantAvgAggregateInputType
    _sum?: TenantSumAggregateInputType
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: number
    name: string
    imageUrl: string | null
    phoneNumber: string | null
    bankName: string
    bankNumber: string
    userId: number
    balance: number
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _avg: TenantAvgAggregateOutputType | null
    _sum: TenantSumAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    phoneNumber?: boolean
    bankName?: boolean
    bankNumber?: boolean
    userId?: boolean
    balance?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | Tenant$propertyArgs<ExtArgs>
    PropertyCategory?: boolean | Tenant$PropertyCategoryArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    phoneNumber?: boolean
    bankName?: boolean
    bankNumber?: boolean
    userId?: boolean
    balance?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    phoneNumber?: boolean
    bankName?: boolean
    bankNumber?: boolean
    userId?: boolean
    balance?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | Tenant$propertyArgs<ExtArgs>
    PropertyCategory?: boolean | Tenant$PropertyCategoryArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      property: Prisma.$PropertyPayload<ExtArgs>[]
      PropertyCategory: Prisma.$PropertyCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      imageUrl: string | null
      phoneNumber: string | null
      bankName: string
      bankNumber: string
      userId: number
      balance: number
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    property<T extends Tenant$propertyArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$propertyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany"> | Null>
    PropertyCategory<T extends Tenant$PropertyCategoryArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$PropertyCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenant model
   */ 
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'Int'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly imageUrl: FieldRef<"Tenant", 'String'>
    readonly phoneNumber: FieldRef<"Tenant", 'String'>
    readonly bankName: FieldRef<"Tenant", 'String'>
    readonly bankNumber: FieldRef<"Tenant", 'String'>
    readonly userId: FieldRef<"Tenant", 'Int'>
    readonly balance: FieldRef<"Tenant", 'Int'>
    readonly isDeleted: FieldRef<"Tenant", 'Boolean'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
  }

  /**
   * Tenant.property
   */
  export type Tenant$propertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Tenant.PropertyCategory
   */
  export type Tenant$PropertyCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    where?: PropertyCategoryWhereInput
    orderBy?: PropertyCategoryOrderByWithRelationInput | PropertyCategoryOrderByWithRelationInput[]
    cursor?: PropertyCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyCategoryScalarFieldEnum | PropertyCategoryScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    id: number | null
    tenantId: number | null
    propertyCategoryId: number | null
  }

  export type PropertySumAggregateOutputType = {
    id: number | null
    tenantId: number | null
    propertyCategoryId: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: number | null
    slug: string | null
    title: string | null
    description: string | null
    latitude: string | null
    longitude: string | null
    status: $Enums.StatusProperty | null
    isDeleted: boolean | null
    tenantId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    location: string | null
    propertyCategoryId: number | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    title: string | null
    description: string | null
    latitude: string | null
    longitude: string | null
    status: $Enums.StatusProperty | null
    isDeleted: boolean | null
    tenantId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    location: string | null
    propertyCategoryId: number | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    description: number
    latitude: number
    longitude: number
    status: number
    isDeleted: number
    tenantId: number
    createdAt: number
    updatedAt: number
    location: number
    propertyCategoryId: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    id?: true
    tenantId?: true
    propertyCategoryId?: true
  }

  export type PropertySumAggregateInputType = {
    id?: true
    tenantId?: true
    propertyCategoryId?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    latitude?: true
    longitude?: true
    status?: true
    isDeleted?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
    location?: true
    propertyCategoryId?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    latitude?: true
    longitude?: true
    status?: true
    isDeleted?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
    location?: true
    propertyCategoryId?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    latitude?: true
    longitude?: true
    status?: true
    isDeleted?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
    location?: true
    propertyCategoryId?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: number
    slug: string
    title: string
    description: string
    latitude: string
    longitude: string
    status: $Enums.StatusProperty
    isDeleted: boolean
    tenantId: number
    createdAt: Date
    updatedAt: Date
    location: string
    propertyCategoryId: number
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    isDeleted?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean
    propertyCategoryId?: boolean
    propertyImage?: boolean | Property$propertyImageArgs<ExtArgs>
    propertyFacility?: boolean | Property$propertyFacilityArgs<ExtArgs>
    room?: boolean | Property$roomArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    review?: boolean | Property$reviewArgs<ExtArgs>
    propertyCategory?: boolean | PropertyCategoryDefaultArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    isDeleted?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean
    propertyCategoryId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    propertyCategory?: boolean | PropertyCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    isDeleted?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean
    propertyCategoryId?: boolean
  }

  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propertyImage?: boolean | Property$propertyImageArgs<ExtArgs>
    propertyFacility?: boolean | Property$propertyFacilityArgs<ExtArgs>
    room?: boolean | Property$roomArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    review?: boolean | Property$reviewArgs<ExtArgs>
    propertyCategory?: boolean | PropertyCategoryDefaultArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    propertyCategory?: boolean | PropertyCategoryDefaultArgs<ExtArgs>
  }

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      propertyImage: Prisma.$PropertyImagePayload<ExtArgs>[]
      propertyFacility: Prisma.$PropertyFacilityPayload<ExtArgs>[]
      room: Prisma.$RoomPayload<ExtArgs>[]
      tenant: Prisma.$TenantPayload<ExtArgs>
      review: Prisma.$ReviewPayload<ExtArgs>[]
      propertyCategory: Prisma.$PropertyCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      title: string
      description: string
      latitude: string
      longitude: string
      status: $Enums.StatusProperty
      isDeleted: boolean
      tenantId: number
      createdAt: Date
      updatedAt: Date
      location: string
      propertyCategoryId: number
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    propertyImage<T extends Property$propertyImageArgs<ExtArgs> = {}>(args?: Subset<T, Property$propertyImageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findMany"> | Null>
    propertyFacility<T extends Property$propertyFacilityArgs<ExtArgs> = {}>(args?: Subset<T, Property$propertyFacilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyFacilityPayload<ExtArgs>, T, "findMany"> | Null>
    room<T extends Property$roomArgs<ExtArgs> = {}>(args?: Subset<T, Property$roomArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany"> | Null>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    review<T extends Property$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Property$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    propertyCategory<T extends PropertyCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyCategoryDefaultArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Property model
   */ 
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'Int'>
    readonly slug: FieldRef<"Property", 'String'>
    readonly title: FieldRef<"Property", 'String'>
    readonly description: FieldRef<"Property", 'String'>
    readonly latitude: FieldRef<"Property", 'String'>
    readonly longitude: FieldRef<"Property", 'String'>
    readonly status: FieldRef<"Property", 'StatusProperty'>
    readonly isDeleted: FieldRef<"Property", 'Boolean'>
    readonly tenantId: FieldRef<"Property", 'Int'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
    readonly location: FieldRef<"Property", 'String'>
    readonly propertyCategoryId: FieldRef<"Property", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
  }

  /**
   * Property.propertyImage
   */
  export type Property$propertyImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    where?: PropertyImageWhereInput
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    cursor?: PropertyImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * Property.propertyFacility
   */
  export type Property$propertyFacilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFacility
     */
    select?: PropertyFacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFacilityInclude<ExtArgs> | null
    where?: PropertyFacilityWhereInput
    orderBy?: PropertyFacilityOrderByWithRelationInput | PropertyFacilityOrderByWithRelationInput[]
    cursor?: PropertyFacilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyFacilityScalarFieldEnum | PropertyFacilityScalarFieldEnum[]
  }

  /**
   * Property.room
   */
  export type Property$roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Property.review
   */
  export type Property$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model PropertyCategory
   */

  export type AggregatePropertyCategory = {
    _count: PropertyCategoryCountAggregateOutputType | null
    _avg: PropertyCategoryAvgAggregateOutputType | null
    _sum: PropertyCategorySumAggregateOutputType | null
    _min: PropertyCategoryMinAggregateOutputType | null
    _max: PropertyCategoryMaxAggregateOutputType | null
  }

  export type PropertyCategoryAvgAggregateOutputType = {
    id: number | null
    tenantId: number | null
  }

  export type PropertyCategorySumAggregateOutputType = {
    id: number | null
    tenantId: number | null
  }

  export type PropertyCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    tenantId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    tenantId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyCategoryCountAggregateOutputType = {
    id: number
    name: number
    tenantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyCategoryAvgAggregateInputType = {
    id?: true
    tenantId?: true
  }

  export type PropertyCategorySumAggregateInputType = {
    id?: true
    tenantId?: true
  }

  export type PropertyCategoryMinAggregateInputType = {
    id?: true
    name?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyCategoryCountAggregateInputType = {
    id?: true
    name?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyCategory to aggregate.
     */
    where?: PropertyCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyCategories to fetch.
     */
    orderBy?: PropertyCategoryOrderByWithRelationInput | PropertyCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyCategories
    **/
    _count?: true | PropertyCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyCategoryMaxAggregateInputType
  }

  export type GetPropertyCategoryAggregateType<T extends PropertyCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyCategory[P]>
      : GetScalarType<T[P], AggregatePropertyCategory[P]>
  }




  export type PropertyCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyCategoryWhereInput
    orderBy?: PropertyCategoryOrderByWithAggregationInput | PropertyCategoryOrderByWithAggregationInput[]
    by: PropertyCategoryScalarFieldEnum[] | PropertyCategoryScalarFieldEnum
    having?: PropertyCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCategoryCountAggregateInputType | true
    _avg?: PropertyCategoryAvgAggregateInputType
    _sum?: PropertyCategorySumAggregateInputType
    _min?: PropertyCategoryMinAggregateInputType
    _max?: PropertyCategoryMaxAggregateInputType
  }

  export type PropertyCategoryGroupByOutputType = {
    id: number
    name: string
    tenantId: number
    createdAt: Date
    updatedAt: Date
    _count: PropertyCategoryCountAggregateOutputType | null
    _avg: PropertyCategoryAvgAggregateOutputType | null
    _sum: PropertyCategorySumAggregateOutputType | null
    _min: PropertyCategoryMinAggregateOutputType | null
    _max: PropertyCategoryMaxAggregateOutputType | null
  }

  type GetPropertyCategoryGroupByPayload<T extends PropertyCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyCategoryGroupByOutputType[P]>
        }
      >
    >


  export type PropertyCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    properties?: boolean | PropertyCategory$propertiesArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    _count?: boolean | PropertyCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyCategory"]>

  export type PropertyCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyCategory"]>

  export type PropertyCategorySelectScalar = {
    id?: boolean
    name?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | PropertyCategory$propertiesArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    _count?: boolean | PropertyCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $PropertyCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyCategory"
    objects: {
      properties: Prisma.$PropertyPayload<ExtArgs>[]
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      tenantId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["propertyCategory"]>
    composites: {}
  }

  type PropertyCategoryGetPayload<S extends boolean | null | undefined | PropertyCategoryDefaultArgs> = $Result.GetResult<Prisma.$PropertyCategoryPayload, S>

  type PropertyCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PropertyCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PropertyCategoryCountAggregateInputType | true
    }

  export interface PropertyCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyCategory'], meta: { name: 'PropertyCategory' } }
    /**
     * Find zero or one PropertyCategory that matches the filter.
     * @param {PropertyCategoryFindUniqueArgs} args - Arguments to find a PropertyCategory
     * @example
     * // Get one PropertyCategory
     * const propertyCategory = await prisma.propertyCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyCategoryFindUniqueArgs>(args: SelectSubset<T, PropertyCategoryFindUniqueArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PropertyCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PropertyCategoryFindUniqueOrThrowArgs} args - Arguments to find a PropertyCategory
     * @example
     * // Get one PropertyCategory
     * const propertyCategory = await prisma.propertyCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PropertyCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoryFindFirstArgs} args - Arguments to find a PropertyCategory
     * @example
     * // Get one PropertyCategory
     * const propertyCategory = await prisma.propertyCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyCategoryFindFirstArgs>(args?: SelectSubset<T, PropertyCategoryFindFirstArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PropertyCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoryFindFirstOrThrowArgs} args - Arguments to find a PropertyCategory
     * @example
     * // Get one PropertyCategory
     * const propertyCategory = await prisma.propertyCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PropertyCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyCategories
     * const propertyCategories = await prisma.propertyCategory.findMany()
     * 
     * // Get first 10 PropertyCategories
     * const propertyCategories = await prisma.propertyCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyCategoryWithIdOnly = await prisma.propertyCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyCategoryFindManyArgs>(args?: SelectSubset<T, PropertyCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PropertyCategory.
     * @param {PropertyCategoryCreateArgs} args - Arguments to create a PropertyCategory.
     * @example
     * // Create one PropertyCategory
     * const PropertyCategory = await prisma.propertyCategory.create({
     *   data: {
     *     // ... data to create a PropertyCategory
     *   }
     * })
     * 
     */
    create<T extends PropertyCategoryCreateArgs>(args: SelectSubset<T, PropertyCategoryCreateArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PropertyCategories.
     * @param {PropertyCategoryCreateManyArgs} args - Arguments to create many PropertyCategories.
     * @example
     * // Create many PropertyCategories
     * const propertyCategory = await prisma.propertyCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCategoryCreateManyArgs>(args?: SelectSubset<T, PropertyCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertyCategories and returns the data saved in the database.
     * @param {PropertyCategoryCreateManyAndReturnArgs} args - Arguments to create many PropertyCategories.
     * @example
     * // Create many PropertyCategories
     * const propertyCategory = await prisma.propertyCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertyCategories and only return the `id`
     * const propertyCategoryWithIdOnly = await prisma.propertyCategory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PropertyCategory.
     * @param {PropertyCategoryDeleteArgs} args - Arguments to delete one PropertyCategory.
     * @example
     * // Delete one PropertyCategory
     * const PropertyCategory = await prisma.propertyCategory.delete({
     *   where: {
     *     // ... filter to delete one PropertyCategory
     *   }
     * })
     * 
     */
    delete<T extends PropertyCategoryDeleteArgs>(args: SelectSubset<T, PropertyCategoryDeleteArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PropertyCategory.
     * @param {PropertyCategoryUpdateArgs} args - Arguments to update one PropertyCategory.
     * @example
     * // Update one PropertyCategory
     * const propertyCategory = await prisma.propertyCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyCategoryUpdateArgs>(args: SelectSubset<T, PropertyCategoryUpdateArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PropertyCategories.
     * @param {PropertyCategoryDeleteManyArgs} args - Arguments to filter PropertyCategories to delete.
     * @example
     * // Delete a few PropertyCategories
     * const { count } = await prisma.propertyCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyCategoryDeleteManyArgs>(args?: SelectSubset<T, PropertyCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyCategories
     * const propertyCategory = await prisma.propertyCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyCategoryUpdateManyArgs>(args: SelectSubset<T, PropertyCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PropertyCategory.
     * @param {PropertyCategoryUpsertArgs} args - Arguments to update or create a PropertyCategory.
     * @example
     * // Update or create a PropertyCategory
     * const propertyCategory = await prisma.propertyCategory.upsert({
     *   create: {
     *     // ... data to create a PropertyCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyCategory we want to update
     *   }
     * })
     */
    upsert<T extends PropertyCategoryUpsertArgs>(args: SelectSubset<T, PropertyCategoryUpsertArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PropertyCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoryCountArgs} args - Arguments to filter PropertyCategories to count.
     * @example
     * // Count the number of PropertyCategories
     * const count = await prisma.propertyCategory.count({
     *   where: {
     *     // ... the filter for the PropertyCategories we want to count
     *   }
     * })
    **/
    count<T extends PropertyCategoryCountArgs>(
      args?: Subset<T, PropertyCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyCategoryAggregateArgs>(args: Subset<T, PropertyCategoryAggregateArgs>): Prisma.PrismaPromise<GetPropertyCategoryAggregateType<T>>

    /**
     * Group by PropertyCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyCategoryGroupByArgs['orderBy'] }
        : { orderBy?: PropertyCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyCategory model
   */
  readonly fields: PropertyCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    properties<T extends PropertyCategory$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, PropertyCategory$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany"> | Null>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropertyCategory model
   */ 
  interface PropertyCategoryFieldRefs {
    readonly id: FieldRef<"PropertyCategory", 'Int'>
    readonly name: FieldRef<"PropertyCategory", 'String'>
    readonly tenantId: FieldRef<"PropertyCategory", 'Int'>
    readonly createdAt: FieldRef<"PropertyCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"PropertyCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropertyCategory findUnique
   */
  export type PropertyCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCategory to fetch.
     */
    where: PropertyCategoryWhereUniqueInput
  }

  /**
   * PropertyCategory findUniqueOrThrow
   */
  export type PropertyCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCategory to fetch.
     */
    where: PropertyCategoryWhereUniqueInput
  }

  /**
   * PropertyCategory findFirst
   */
  export type PropertyCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCategory to fetch.
     */
    where?: PropertyCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyCategories to fetch.
     */
    orderBy?: PropertyCategoryOrderByWithRelationInput | PropertyCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyCategories.
     */
    cursor?: PropertyCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyCategories.
     */
    distinct?: PropertyCategoryScalarFieldEnum | PropertyCategoryScalarFieldEnum[]
  }

  /**
   * PropertyCategory findFirstOrThrow
   */
  export type PropertyCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCategory to fetch.
     */
    where?: PropertyCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyCategories to fetch.
     */
    orderBy?: PropertyCategoryOrderByWithRelationInput | PropertyCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyCategories.
     */
    cursor?: PropertyCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyCategories.
     */
    distinct?: PropertyCategoryScalarFieldEnum | PropertyCategoryScalarFieldEnum[]
  }

  /**
   * PropertyCategory findMany
   */
  export type PropertyCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCategories to fetch.
     */
    where?: PropertyCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyCategories to fetch.
     */
    orderBy?: PropertyCategoryOrderByWithRelationInput | PropertyCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyCategories.
     */
    cursor?: PropertyCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyCategories.
     */
    skip?: number
    distinct?: PropertyCategoryScalarFieldEnum | PropertyCategoryScalarFieldEnum[]
  }

  /**
   * PropertyCategory create
   */
  export type PropertyCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyCategory.
     */
    data: XOR<PropertyCategoryCreateInput, PropertyCategoryUncheckedCreateInput>
  }

  /**
   * PropertyCategory createMany
   */
  export type PropertyCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyCategories.
     */
    data: PropertyCategoryCreateManyInput | PropertyCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyCategory createManyAndReturn
   */
  export type PropertyCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PropertyCategories.
     */
    data: PropertyCategoryCreateManyInput | PropertyCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyCategory update
   */
  export type PropertyCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyCategory.
     */
    data: XOR<PropertyCategoryUpdateInput, PropertyCategoryUncheckedUpdateInput>
    /**
     * Choose, which PropertyCategory to update.
     */
    where: PropertyCategoryWhereUniqueInput
  }

  /**
   * PropertyCategory updateMany
   */
  export type PropertyCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyCategories.
     */
    data: XOR<PropertyCategoryUpdateManyMutationInput, PropertyCategoryUncheckedUpdateManyInput>
    /**
     * Filter which PropertyCategories to update
     */
    where?: PropertyCategoryWhereInput
  }

  /**
   * PropertyCategory upsert
   */
  export type PropertyCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyCategory to update in case it exists.
     */
    where: PropertyCategoryWhereUniqueInput
    /**
     * In case the PropertyCategory found by the `where` argument doesn't exist, create a new PropertyCategory with this data.
     */
    create: XOR<PropertyCategoryCreateInput, PropertyCategoryUncheckedCreateInput>
    /**
     * In case the PropertyCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyCategoryUpdateInput, PropertyCategoryUncheckedUpdateInput>
  }

  /**
   * PropertyCategory delete
   */
  export type PropertyCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * Filter which PropertyCategory to delete.
     */
    where: PropertyCategoryWhereUniqueInput
  }

  /**
   * PropertyCategory deleteMany
   */
  export type PropertyCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyCategories to delete
     */
    where?: PropertyCategoryWhereInput
  }

  /**
   * PropertyCategory.properties
   */
  export type PropertyCategory$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * PropertyCategory without action
   */
  export type PropertyCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
  }


  /**
   * Model PropertyImage
   */

  export type AggregatePropertyImage = {
    _count: PropertyImageCountAggregateOutputType | null
    _avg: PropertyImageAvgAggregateOutputType | null
    _sum: PropertyImageSumAggregateOutputType | null
    _min: PropertyImageMinAggregateOutputType | null
    _max: PropertyImageMaxAggregateOutputType | null
  }

  export type PropertyImageAvgAggregateOutputType = {
    id: number | null
    propertyId: number | null
  }

  export type PropertyImageSumAggregateOutputType = {
    id: number | null
    propertyId: number | null
  }

  export type PropertyImageMinAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    isDeleted: boolean | null
    propertyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyImageMaxAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    isDeleted: boolean | null
    propertyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyImageCountAggregateOutputType = {
    id: number
    imageUrl: number
    isDeleted: number
    propertyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyImageAvgAggregateInputType = {
    id?: true
    propertyId?: true
  }

  export type PropertyImageSumAggregateInputType = {
    id?: true
    propertyId?: true
  }

  export type PropertyImageMinAggregateInputType = {
    id?: true
    imageUrl?: true
    isDeleted?: true
    propertyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyImageMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    isDeleted?: true
    propertyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyImageCountAggregateInputType = {
    id?: true
    imageUrl?: true
    isDeleted?: true
    propertyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyImage to aggregate.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyImages
    **/
    _count?: true | PropertyImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyImageMaxAggregateInputType
  }

  export type GetPropertyImageAggregateType<T extends PropertyImageAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyImage[P]>
      : GetScalarType<T[P], AggregatePropertyImage[P]>
  }




  export type PropertyImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyImageWhereInput
    orderBy?: PropertyImageOrderByWithAggregationInput | PropertyImageOrderByWithAggregationInput[]
    by: PropertyImageScalarFieldEnum[] | PropertyImageScalarFieldEnum
    having?: PropertyImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyImageCountAggregateInputType | true
    _avg?: PropertyImageAvgAggregateInputType
    _sum?: PropertyImageSumAggregateInputType
    _min?: PropertyImageMinAggregateInputType
    _max?: PropertyImageMaxAggregateInputType
  }

  export type PropertyImageGroupByOutputType = {
    id: number
    imageUrl: string | null
    isDeleted: boolean
    propertyId: number
    createdAt: Date
    updatedAt: Date
    _count: PropertyImageCountAggregateOutputType | null
    _avg: PropertyImageAvgAggregateOutputType | null
    _sum: PropertyImageSumAggregateOutputType | null
    _min: PropertyImageMinAggregateOutputType | null
    _max: PropertyImageMaxAggregateOutputType | null
  }

  type GetPropertyImageGroupByPayload<T extends PropertyImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyImageGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyImageGroupByOutputType[P]>
        }
      >
    >


  export type PropertyImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    isDeleted?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImage"]>

  export type PropertyImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    isDeleted?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImage"]>

  export type PropertyImageSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    isDeleted?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $PropertyImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyImage"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imageUrl: string | null
      isDeleted: boolean
      propertyId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["propertyImage"]>
    composites: {}
  }

  type PropertyImageGetPayload<S extends boolean | null | undefined | PropertyImageDefaultArgs> = $Result.GetResult<Prisma.$PropertyImagePayload, S>

  type PropertyImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PropertyImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PropertyImageCountAggregateInputType | true
    }

  export interface PropertyImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyImage'], meta: { name: 'PropertyImage' } }
    /**
     * Find zero or one PropertyImage that matches the filter.
     * @param {PropertyImageFindUniqueArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyImageFindUniqueArgs>(args: SelectSubset<T, PropertyImageFindUniqueArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PropertyImage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PropertyImageFindUniqueOrThrowArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyImageFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PropertyImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindFirstArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyImageFindFirstArgs>(args?: SelectSubset<T, PropertyImageFindFirstArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PropertyImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindFirstOrThrowArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyImageFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PropertyImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyImages
     * const propertyImages = await prisma.propertyImage.findMany()
     * 
     * // Get first 10 PropertyImages
     * const propertyImages = await prisma.propertyImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyImageWithIdOnly = await prisma.propertyImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyImageFindManyArgs>(args?: SelectSubset<T, PropertyImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PropertyImage.
     * @param {PropertyImageCreateArgs} args - Arguments to create a PropertyImage.
     * @example
     * // Create one PropertyImage
     * const PropertyImage = await prisma.propertyImage.create({
     *   data: {
     *     // ... data to create a PropertyImage
     *   }
     * })
     * 
     */
    create<T extends PropertyImageCreateArgs>(args: SelectSubset<T, PropertyImageCreateArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PropertyImages.
     * @param {PropertyImageCreateManyArgs} args - Arguments to create many PropertyImages.
     * @example
     * // Create many PropertyImages
     * const propertyImage = await prisma.propertyImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyImageCreateManyArgs>(args?: SelectSubset<T, PropertyImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertyImages and returns the data saved in the database.
     * @param {PropertyImageCreateManyAndReturnArgs} args - Arguments to create many PropertyImages.
     * @example
     * // Create many PropertyImages
     * const propertyImage = await prisma.propertyImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertyImages and only return the `id`
     * const propertyImageWithIdOnly = await prisma.propertyImage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyImageCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PropertyImage.
     * @param {PropertyImageDeleteArgs} args - Arguments to delete one PropertyImage.
     * @example
     * // Delete one PropertyImage
     * const PropertyImage = await prisma.propertyImage.delete({
     *   where: {
     *     // ... filter to delete one PropertyImage
     *   }
     * })
     * 
     */
    delete<T extends PropertyImageDeleteArgs>(args: SelectSubset<T, PropertyImageDeleteArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PropertyImage.
     * @param {PropertyImageUpdateArgs} args - Arguments to update one PropertyImage.
     * @example
     * // Update one PropertyImage
     * const propertyImage = await prisma.propertyImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyImageUpdateArgs>(args: SelectSubset<T, PropertyImageUpdateArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PropertyImages.
     * @param {PropertyImageDeleteManyArgs} args - Arguments to filter PropertyImages to delete.
     * @example
     * // Delete a few PropertyImages
     * const { count } = await prisma.propertyImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyImageDeleteManyArgs>(args?: SelectSubset<T, PropertyImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyImages
     * const propertyImage = await prisma.propertyImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyImageUpdateManyArgs>(args: SelectSubset<T, PropertyImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PropertyImage.
     * @param {PropertyImageUpsertArgs} args - Arguments to update or create a PropertyImage.
     * @example
     * // Update or create a PropertyImage
     * const propertyImage = await prisma.propertyImage.upsert({
     *   create: {
     *     // ... data to create a PropertyImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyImage we want to update
     *   }
     * })
     */
    upsert<T extends PropertyImageUpsertArgs>(args: SelectSubset<T, PropertyImageUpsertArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PropertyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageCountArgs} args - Arguments to filter PropertyImages to count.
     * @example
     * // Count the number of PropertyImages
     * const count = await prisma.propertyImage.count({
     *   where: {
     *     // ... the filter for the PropertyImages we want to count
     *   }
     * })
    **/
    count<T extends PropertyImageCountArgs>(
      args?: Subset<T, PropertyImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyImageAggregateArgs>(args: Subset<T, PropertyImageAggregateArgs>): Prisma.PrismaPromise<GetPropertyImageAggregateType<T>>

    /**
     * Group by PropertyImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyImageGroupByArgs['orderBy'] }
        : { orderBy?: PropertyImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyImage model
   */
  readonly fields: PropertyImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropertyImage model
   */ 
  interface PropertyImageFieldRefs {
    readonly id: FieldRef<"PropertyImage", 'Int'>
    readonly imageUrl: FieldRef<"PropertyImage", 'String'>
    readonly isDeleted: FieldRef<"PropertyImage", 'Boolean'>
    readonly propertyId: FieldRef<"PropertyImage", 'Int'>
    readonly createdAt: FieldRef<"PropertyImage", 'DateTime'>
    readonly updatedAt: FieldRef<"PropertyImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropertyImage findUnique
   */
  export type PropertyImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage findUniqueOrThrow
   */
  export type PropertyImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage findFirst
   */
  export type PropertyImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyImages.
     */
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage findFirstOrThrow
   */
  export type PropertyImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyImages.
     */
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage findMany
   */
  export type PropertyImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImages to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage create
   */
  export type PropertyImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyImage.
     */
    data: XOR<PropertyImageCreateInput, PropertyImageUncheckedCreateInput>
  }

  /**
   * PropertyImage createMany
   */
  export type PropertyImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyImages.
     */
    data: PropertyImageCreateManyInput | PropertyImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyImage createManyAndReturn
   */
  export type PropertyImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PropertyImages.
     */
    data: PropertyImageCreateManyInput | PropertyImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyImage update
   */
  export type PropertyImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyImage.
     */
    data: XOR<PropertyImageUpdateInput, PropertyImageUncheckedUpdateInput>
    /**
     * Choose, which PropertyImage to update.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage updateMany
   */
  export type PropertyImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyImages.
     */
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyInput>
    /**
     * Filter which PropertyImages to update
     */
    where?: PropertyImageWhereInput
  }

  /**
   * PropertyImage upsert
   */
  export type PropertyImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyImage to update in case it exists.
     */
    where: PropertyImageWhereUniqueInput
    /**
     * In case the PropertyImage found by the `where` argument doesn't exist, create a new PropertyImage with this data.
     */
    create: XOR<PropertyImageCreateInput, PropertyImageUncheckedCreateInput>
    /**
     * In case the PropertyImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyImageUpdateInput, PropertyImageUncheckedUpdateInput>
  }

  /**
   * PropertyImage delete
   */
  export type PropertyImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter which PropertyImage to delete.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage deleteMany
   */
  export type PropertyImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyImages to delete
     */
    where?: PropertyImageWhereInput
  }

  /**
   * PropertyImage without action
   */
  export type PropertyImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
  }


  /**
   * Model PropertyFacility
   */

  export type AggregatePropertyFacility = {
    _count: PropertyFacilityCountAggregateOutputType | null
    _avg: PropertyFacilityAvgAggregateOutputType | null
    _sum: PropertyFacilitySumAggregateOutputType | null
    _min: PropertyFacilityMinAggregateOutputType | null
    _max: PropertyFacilityMaxAggregateOutputType | null
  }

  export type PropertyFacilityAvgAggregateOutputType = {
    id: number | null
    propertyId: number | null
  }

  export type PropertyFacilitySumAggregateOutputType = {
    id: number | null
    propertyId: number | null
  }

  export type PropertyFacilityMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    isDeleted: boolean | null
    propertyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyFacilityMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    isDeleted: boolean | null
    propertyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyFacilityCountAggregateOutputType = {
    id: number
    title: number
    description: number
    isDeleted: number
    propertyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyFacilityAvgAggregateInputType = {
    id?: true
    propertyId?: true
  }

  export type PropertyFacilitySumAggregateInputType = {
    id?: true
    propertyId?: true
  }

  export type PropertyFacilityMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isDeleted?: true
    propertyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyFacilityMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isDeleted?: true
    propertyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyFacilityCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isDeleted?: true
    propertyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyFacilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyFacility to aggregate.
     */
    where?: PropertyFacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyFacilities to fetch.
     */
    orderBy?: PropertyFacilityOrderByWithRelationInput | PropertyFacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyFacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyFacilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyFacilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyFacilities
    **/
    _count?: true | PropertyFacilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyFacilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyFacilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyFacilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyFacilityMaxAggregateInputType
  }

  export type GetPropertyFacilityAggregateType<T extends PropertyFacilityAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyFacility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyFacility[P]>
      : GetScalarType<T[P], AggregatePropertyFacility[P]>
  }




  export type PropertyFacilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyFacilityWhereInput
    orderBy?: PropertyFacilityOrderByWithAggregationInput | PropertyFacilityOrderByWithAggregationInput[]
    by: PropertyFacilityScalarFieldEnum[] | PropertyFacilityScalarFieldEnum
    having?: PropertyFacilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyFacilityCountAggregateInputType | true
    _avg?: PropertyFacilityAvgAggregateInputType
    _sum?: PropertyFacilitySumAggregateInputType
    _min?: PropertyFacilityMinAggregateInputType
    _max?: PropertyFacilityMaxAggregateInputType
  }

  export type PropertyFacilityGroupByOutputType = {
    id: number
    title: string
    description: string
    isDeleted: boolean
    propertyId: number
    createdAt: Date
    updatedAt: Date
    _count: PropertyFacilityCountAggregateOutputType | null
    _avg: PropertyFacilityAvgAggregateOutputType | null
    _sum: PropertyFacilitySumAggregateOutputType | null
    _min: PropertyFacilityMinAggregateOutputType | null
    _max: PropertyFacilityMaxAggregateOutputType | null
  }

  type GetPropertyFacilityGroupByPayload<T extends PropertyFacilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyFacilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyFacilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyFacilityGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyFacilityGroupByOutputType[P]>
        }
      >
    >


  export type PropertyFacilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isDeleted?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyFacility"]>

  export type PropertyFacilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isDeleted?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyFacility"]>

  export type PropertyFacilitySelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    isDeleted?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyFacilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyFacilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $PropertyFacilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyFacility"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      isDeleted: boolean
      propertyId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["propertyFacility"]>
    composites: {}
  }

  type PropertyFacilityGetPayload<S extends boolean | null | undefined | PropertyFacilityDefaultArgs> = $Result.GetResult<Prisma.$PropertyFacilityPayload, S>

  type PropertyFacilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PropertyFacilityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PropertyFacilityCountAggregateInputType | true
    }

  export interface PropertyFacilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyFacility'], meta: { name: 'PropertyFacility' } }
    /**
     * Find zero or one PropertyFacility that matches the filter.
     * @param {PropertyFacilityFindUniqueArgs} args - Arguments to find a PropertyFacility
     * @example
     * // Get one PropertyFacility
     * const propertyFacility = await prisma.propertyFacility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFacilityFindUniqueArgs>(args: SelectSubset<T, PropertyFacilityFindUniqueArgs<ExtArgs>>): Prisma__PropertyFacilityClient<$Result.GetResult<Prisma.$PropertyFacilityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PropertyFacility that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PropertyFacilityFindUniqueOrThrowArgs} args - Arguments to find a PropertyFacility
     * @example
     * // Get one PropertyFacility
     * const propertyFacility = await prisma.propertyFacility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFacilityFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFacilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyFacilityClient<$Result.GetResult<Prisma.$PropertyFacilityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PropertyFacility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFacilityFindFirstArgs} args - Arguments to find a PropertyFacility
     * @example
     * // Get one PropertyFacility
     * const propertyFacility = await prisma.propertyFacility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFacilityFindFirstArgs>(args?: SelectSubset<T, PropertyFacilityFindFirstArgs<ExtArgs>>): Prisma__PropertyFacilityClient<$Result.GetResult<Prisma.$PropertyFacilityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PropertyFacility that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFacilityFindFirstOrThrowArgs} args - Arguments to find a PropertyFacility
     * @example
     * // Get one PropertyFacility
     * const propertyFacility = await prisma.propertyFacility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFacilityFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFacilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyFacilityClient<$Result.GetResult<Prisma.$PropertyFacilityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PropertyFacilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFacilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyFacilities
     * const propertyFacilities = await prisma.propertyFacility.findMany()
     * 
     * // Get first 10 PropertyFacilities
     * const propertyFacilities = await prisma.propertyFacility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyFacilityWithIdOnly = await prisma.propertyFacility.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFacilityFindManyArgs>(args?: SelectSubset<T, PropertyFacilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyFacilityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PropertyFacility.
     * @param {PropertyFacilityCreateArgs} args - Arguments to create a PropertyFacility.
     * @example
     * // Create one PropertyFacility
     * const PropertyFacility = await prisma.propertyFacility.create({
     *   data: {
     *     // ... data to create a PropertyFacility
     *   }
     * })
     * 
     */
    create<T extends PropertyFacilityCreateArgs>(args: SelectSubset<T, PropertyFacilityCreateArgs<ExtArgs>>): Prisma__PropertyFacilityClient<$Result.GetResult<Prisma.$PropertyFacilityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PropertyFacilities.
     * @param {PropertyFacilityCreateManyArgs} args - Arguments to create many PropertyFacilities.
     * @example
     * // Create many PropertyFacilities
     * const propertyFacility = await prisma.propertyFacility.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyFacilityCreateManyArgs>(args?: SelectSubset<T, PropertyFacilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertyFacilities and returns the data saved in the database.
     * @param {PropertyFacilityCreateManyAndReturnArgs} args - Arguments to create many PropertyFacilities.
     * @example
     * // Create many PropertyFacilities
     * const propertyFacility = await prisma.propertyFacility.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertyFacilities and only return the `id`
     * const propertyFacilityWithIdOnly = await prisma.propertyFacility.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyFacilityCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyFacilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyFacilityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PropertyFacility.
     * @param {PropertyFacilityDeleteArgs} args - Arguments to delete one PropertyFacility.
     * @example
     * // Delete one PropertyFacility
     * const PropertyFacility = await prisma.propertyFacility.delete({
     *   where: {
     *     // ... filter to delete one PropertyFacility
     *   }
     * })
     * 
     */
    delete<T extends PropertyFacilityDeleteArgs>(args: SelectSubset<T, PropertyFacilityDeleteArgs<ExtArgs>>): Prisma__PropertyFacilityClient<$Result.GetResult<Prisma.$PropertyFacilityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PropertyFacility.
     * @param {PropertyFacilityUpdateArgs} args - Arguments to update one PropertyFacility.
     * @example
     * // Update one PropertyFacility
     * const propertyFacility = await prisma.propertyFacility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyFacilityUpdateArgs>(args: SelectSubset<T, PropertyFacilityUpdateArgs<ExtArgs>>): Prisma__PropertyFacilityClient<$Result.GetResult<Prisma.$PropertyFacilityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PropertyFacilities.
     * @param {PropertyFacilityDeleteManyArgs} args - Arguments to filter PropertyFacilities to delete.
     * @example
     * // Delete a few PropertyFacilities
     * const { count } = await prisma.propertyFacility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyFacilityDeleteManyArgs>(args?: SelectSubset<T, PropertyFacilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyFacilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFacilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyFacilities
     * const propertyFacility = await prisma.propertyFacility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyFacilityUpdateManyArgs>(args: SelectSubset<T, PropertyFacilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PropertyFacility.
     * @param {PropertyFacilityUpsertArgs} args - Arguments to update or create a PropertyFacility.
     * @example
     * // Update or create a PropertyFacility
     * const propertyFacility = await prisma.propertyFacility.upsert({
     *   create: {
     *     // ... data to create a PropertyFacility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyFacility we want to update
     *   }
     * })
     */
    upsert<T extends PropertyFacilityUpsertArgs>(args: SelectSubset<T, PropertyFacilityUpsertArgs<ExtArgs>>): Prisma__PropertyFacilityClient<$Result.GetResult<Prisma.$PropertyFacilityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PropertyFacilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFacilityCountArgs} args - Arguments to filter PropertyFacilities to count.
     * @example
     * // Count the number of PropertyFacilities
     * const count = await prisma.propertyFacility.count({
     *   where: {
     *     // ... the filter for the PropertyFacilities we want to count
     *   }
     * })
    **/
    count<T extends PropertyFacilityCountArgs>(
      args?: Subset<T, PropertyFacilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyFacilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyFacility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFacilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyFacilityAggregateArgs>(args: Subset<T, PropertyFacilityAggregateArgs>): Prisma.PrismaPromise<GetPropertyFacilityAggregateType<T>>

    /**
     * Group by PropertyFacility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFacilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyFacilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyFacilityGroupByArgs['orderBy'] }
        : { orderBy?: PropertyFacilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyFacilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyFacilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyFacility model
   */
  readonly fields: PropertyFacilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyFacility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyFacilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropertyFacility model
   */ 
  interface PropertyFacilityFieldRefs {
    readonly id: FieldRef<"PropertyFacility", 'Int'>
    readonly title: FieldRef<"PropertyFacility", 'String'>
    readonly description: FieldRef<"PropertyFacility", 'String'>
    readonly isDeleted: FieldRef<"PropertyFacility", 'Boolean'>
    readonly propertyId: FieldRef<"PropertyFacility", 'Int'>
    readonly createdAt: FieldRef<"PropertyFacility", 'DateTime'>
    readonly updatedAt: FieldRef<"PropertyFacility", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropertyFacility findUnique
   */
  export type PropertyFacilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFacility
     */
    select?: PropertyFacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFacilityInclude<ExtArgs> | null
    /**
     * Filter, which PropertyFacility to fetch.
     */
    where: PropertyFacilityWhereUniqueInput
  }

  /**
   * PropertyFacility findUniqueOrThrow
   */
  export type PropertyFacilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFacility
     */
    select?: PropertyFacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFacilityInclude<ExtArgs> | null
    /**
     * Filter, which PropertyFacility to fetch.
     */
    where: PropertyFacilityWhereUniqueInput
  }

  /**
   * PropertyFacility findFirst
   */
  export type PropertyFacilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFacility
     */
    select?: PropertyFacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFacilityInclude<ExtArgs> | null
    /**
     * Filter, which PropertyFacility to fetch.
     */
    where?: PropertyFacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyFacilities to fetch.
     */
    orderBy?: PropertyFacilityOrderByWithRelationInput | PropertyFacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyFacilities.
     */
    cursor?: PropertyFacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyFacilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyFacilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyFacilities.
     */
    distinct?: PropertyFacilityScalarFieldEnum | PropertyFacilityScalarFieldEnum[]
  }

  /**
   * PropertyFacility findFirstOrThrow
   */
  export type PropertyFacilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFacility
     */
    select?: PropertyFacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFacilityInclude<ExtArgs> | null
    /**
     * Filter, which PropertyFacility to fetch.
     */
    where?: PropertyFacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyFacilities to fetch.
     */
    orderBy?: PropertyFacilityOrderByWithRelationInput | PropertyFacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyFacilities.
     */
    cursor?: PropertyFacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyFacilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyFacilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyFacilities.
     */
    distinct?: PropertyFacilityScalarFieldEnum | PropertyFacilityScalarFieldEnum[]
  }

  /**
   * PropertyFacility findMany
   */
  export type PropertyFacilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFacility
     */
    select?: PropertyFacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFacilityInclude<ExtArgs> | null
    /**
     * Filter, which PropertyFacilities to fetch.
     */
    where?: PropertyFacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyFacilities to fetch.
     */
    orderBy?: PropertyFacilityOrderByWithRelationInput | PropertyFacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyFacilities.
     */
    cursor?: PropertyFacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyFacilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyFacilities.
     */
    skip?: number
    distinct?: PropertyFacilityScalarFieldEnum | PropertyFacilityScalarFieldEnum[]
  }

  /**
   * PropertyFacility create
   */
  export type PropertyFacilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFacility
     */
    select?: PropertyFacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFacilityInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyFacility.
     */
    data: XOR<PropertyFacilityCreateInput, PropertyFacilityUncheckedCreateInput>
  }

  /**
   * PropertyFacility createMany
   */
  export type PropertyFacilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyFacilities.
     */
    data: PropertyFacilityCreateManyInput | PropertyFacilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyFacility createManyAndReturn
   */
  export type PropertyFacilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFacility
     */
    select?: PropertyFacilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PropertyFacilities.
     */
    data: PropertyFacilityCreateManyInput | PropertyFacilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFacilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyFacility update
   */
  export type PropertyFacilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFacility
     */
    select?: PropertyFacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFacilityInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyFacility.
     */
    data: XOR<PropertyFacilityUpdateInput, PropertyFacilityUncheckedUpdateInput>
    /**
     * Choose, which PropertyFacility to update.
     */
    where: PropertyFacilityWhereUniqueInput
  }

  /**
   * PropertyFacility updateMany
   */
  export type PropertyFacilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyFacilities.
     */
    data: XOR<PropertyFacilityUpdateManyMutationInput, PropertyFacilityUncheckedUpdateManyInput>
    /**
     * Filter which PropertyFacilities to update
     */
    where?: PropertyFacilityWhereInput
  }

  /**
   * PropertyFacility upsert
   */
  export type PropertyFacilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFacility
     */
    select?: PropertyFacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFacilityInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyFacility to update in case it exists.
     */
    where: PropertyFacilityWhereUniqueInput
    /**
     * In case the PropertyFacility found by the `where` argument doesn't exist, create a new PropertyFacility with this data.
     */
    create: XOR<PropertyFacilityCreateInput, PropertyFacilityUncheckedCreateInput>
    /**
     * In case the PropertyFacility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyFacilityUpdateInput, PropertyFacilityUncheckedUpdateInput>
  }

  /**
   * PropertyFacility delete
   */
  export type PropertyFacilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFacility
     */
    select?: PropertyFacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFacilityInclude<ExtArgs> | null
    /**
     * Filter which PropertyFacility to delete.
     */
    where: PropertyFacilityWhereUniqueInput
  }

  /**
   * PropertyFacility deleteMany
   */
  export type PropertyFacilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyFacilities to delete
     */
    where?: PropertyFacilityWhereInput
  }

  /**
   * PropertyFacility without action
   */
  export type PropertyFacilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFacility
     */
    select?: PropertyFacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFacilityInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    id: number | null
    stock: number | null
    price: number | null
    guest: number | null
    propertyId: number | null
  }

  export type RoomSumAggregateOutputType = {
    id: number | null
    stock: number | null
    price: number | null
    guest: number | null
    propertyId: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: number | null
    type: $Enums.Type | null
    stock: number | null
    price: number | null
    guest: number | null
    isDeleted: boolean | null
    propertyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: number | null
    type: $Enums.Type | null
    stock: number | null
    price: number | null
    guest: number | null
    isDeleted: boolean | null
    propertyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    type: number
    stock: number
    price: number
    guest: number
    isDeleted: number
    propertyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    id?: true
    stock?: true
    price?: true
    guest?: true
    propertyId?: true
  }

  export type RoomSumAggregateInputType = {
    id?: true
    stock?: true
    price?: true
    guest?: true
    propertyId?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    type?: true
    stock?: true
    price?: true
    guest?: true
    isDeleted?: true
    propertyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    type?: true
    stock?: true
    price?: true
    guest?: true
    isDeleted?: true
    propertyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    type?: true
    stock?: true
    price?: true
    guest?: true
    isDeleted?: true
    propertyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: number
    type: $Enums.Type
    stock: number
    price: number
    guest: number
    isDeleted: boolean
    propertyId: number
    createdAt: Date
    updatedAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    stock?: boolean
    price?: boolean
    guest?: boolean
    isDeleted?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    peakSeasonRate?: boolean | Room$peakSeasonRateArgs<ExtArgs>
    roomFacility?: boolean | Room$roomFacilityArgs<ExtArgs>
    roomImage?: boolean | Room$roomImageArgs<ExtArgs>
    roomNonAvailability?: boolean | Room$roomNonAvailabilityArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    reservation?: boolean | Room$reservationArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    stock?: boolean
    price?: boolean
    guest?: boolean
    isDeleted?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    type?: boolean
    stock?: boolean
    price?: boolean
    guest?: boolean
    isDeleted?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peakSeasonRate?: boolean | Room$peakSeasonRateArgs<ExtArgs>
    roomFacility?: boolean | Room$roomFacilityArgs<ExtArgs>
    roomImage?: boolean | Room$roomImageArgs<ExtArgs>
    roomNonAvailability?: boolean | Room$roomNonAvailabilityArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    reservation?: boolean | Room$reservationArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      peakSeasonRate: Prisma.$PeakSeasonRatePayload<ExtArgs>[]
      roomFacility: Prisma.$RoomFacilityPayload<ExtArgs>[]
      roomImage: Prisma.$RoomImagePayload<ExtArgs>[]
      roomNonAvailability: Prisma.$RoomNonAvailabilityPayload<ExtArgs>[]
      property: Prisma.$PropertyPayload<ExtArgs>
      reservation: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.Type
      stock: number
      price: number
      guest: number
      isDeleted: boolean
      propertyId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    peakSeasonRate<T extends Room$peakSeasonRateArgs<ExtArgs> = {}>(args?: Subset<T, Room$peakSeasonRateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeakSeasonRatePayload<ExtArgs>, T, "findMany"> | Null>
    roomFacility<T extends Room$roomFacilityArgs<ExtArgs> = {}>(args?: Subset<T, Room$roomFacilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomFacilityPayload<ExtArgs>, T, "findMany"> | Null>
    roomImage<T extends Room$roomImageArgs<ExtArgs> = {}>(args?: Subset<T, Room$roomImageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "findMany"> | Null>
    roomNonAvailability<T extends Room$roomNonAvailabilityArgs<ExtArgs> = {}>(args?: Subset<T, Room$roomNonAvailabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomNonAvailabilityPayload<ExtArgs>, T, "findMany"> | Null>
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    reservation<T extends Room$reservationArgs<ExtArgs> = {}>(args?: Subset<T, Room$reservationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */ 
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'Int'>
    readonly type: FieldRef<"Room", 'Type'>
    readonly stock: FieldRef<"Room", 'Int'>
    readonly price: FieldRef<"Room", 'Int'>
    readonly guest: FieldRef<"Room", 'Int'>
    readonly isDeleted: FieldRef<"Room", 'Boolean'>
    readonly propertyId: FieldRef<"Room", 'Int'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly updatedAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
  }

  /**
   * Room.peakSeasonRate
   */
  export type Room$peakSeasonRateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateInclude<ExtArgs> | null
    where?: PeakSeasonRateWhereInput
    orderBy?: PeakSeasonRateOrderByWithRelationInput | PeakSeasonRateOrderByWithRelationInput[]
    cursor?: PeakSeasonRateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeakSeasonRateScalarFieldEnum | PeakSeasonRateScalarFieldEnum[]
  }

  /**
   * Room.roomFacility
   */
  export type Room$roomFacilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomFacility
     */
    select?: RoomFacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomFacilityInclude<ExtArgs> | null
    where?: RoomFacilityWhereInput
    orderBy?: RoomFacilityOrderByWithRelationInput | RoomFacilityOrderByWithRelationInput[]
    cursor?: RoomFacilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomFacilityScalarFieldEnum | RoomFacilityScalarFieldEnum[]
  }

  /**
   * Room.roomImage
   */
  export type Room$roomImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    where?: RoomImageWhereInput
    orderBy?: RoomImageOrderByWithRelationInput | RoomImageOrderByWithRelationInput[]
    cursor?: RoomImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomImageScalarFieldEnum | RoomImageScalarFieldEnum[]
  }

  /**
   * Room.roomNonAvailability
   */
  export type Room$roomNonAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNonAvailability
     */
    select?: RoomNonAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNonAvailabilityInclude<ExtArgs> | null
    where?: RoomNonAvailabilityWhereInput
    orderBy?: RoomNonAvailabilityOrderByWithRelationInput | RoomNonAvailabilityOrderByWithRelationInput[]
    cursor?: RoomNonAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomNonAvailabilityScalarFieldEnum | RoomNonAvailabilityScalarFieldEnum[]
  }

  /**
   * Room.reservation
   */
  export type Room$reservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model PeakSeasonRate
   */

  export type AggregatePeakSeasonRate = {
    _count: PeakSeasonRateCountAggregateOutputType | null
    _avg: PeakSeasonRateAvgAggregateOutputType | null
    _sum: PeakSeasonRateSumAggregateOutputType | null
    _min: PeakSeasonRateMinAggregateOutputType | null
    _max: PeakSeasonRateMaxAggregateOutputType | null
  }

  export type PeakSeasonRateAvgAggregateOutputType = {
    id: number | null
    price: number | null
    roomId: number | null
  }

  export type PeakSeasonRateSumAggregateOutputType = {
    id: number | null
    price: number | null
    roomId: number | null
  }

  export type PeakSeasonRateMinAggregateOutputType = {
    id: number | null
    price: number | null
    startDate: Date | null
    endDate: Date | null
    isDeleted: boolean | null
    roomId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PeakSeasonRateMaxAggregateOutputType = {
    id: number | null
    price: number | null
    startDate: Date | null
    endDate: Date | null
    isDeleted: boolean | null
    roomId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PeakSeasonRateCountAggregateOutputType = {
    id: number
    price: number
    startDate: number
    endDate: number
    isDeleted: number
    roomId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PeakSeasonRateAvgAggregateInputType = {
    id?: true
    price?: true
    roomId?: true
  }

  export type PeakSeasonRateSumAggregateInputType = {
    id?: true
    price?: true
    roomId?: true
  }

  export type PeakSeasonRateMinAggregateInputType = {
    id?: true
    price?: true
    startDate?: true
    endDate?: true
    isDeleted?: true
    roomId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PeakSeasonRateMaxAggregateInputType = {
    id?: true
    price?: true
    startDate?: true
    endDate?: true
    isDeleted?: true
    roomId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PeakSeasonRateCountAggregateInputType = {
    id?: true
    price?: true
    startDate?: true
    endDate?: true
    isDeleted?: true
    roomId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PeakSeasonRateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeakSeasonRate to aggregate.
     */
    where?: PeakSeasonRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeakSeasonRates to fetch.
     */
    orderBy?: PeakSeasonRateOrderByWithRelationInput | PeakSeasonRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeakSeasonRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeakSeasonRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeakSeasonRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PeakSeasonRates
    **/
    _count?: true | PeakSeasonRateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeakSeasonRateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeakSeasonRateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeakSeasonRateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeakSeasonRateMaxAggregateInputType
  }

  export type GetPeakSeasonRateAggregateType<T extends PeakSeasonRateAggregateArgs> = {
        [P in keyof T & keyof AggregatePeakSeasonRate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeakSeasonRate[P]>
      : GetScalarType<T[P], AggregatePeakSeasonRate[P]>
  }




  export type PeakSeasonRateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeakSeasonRateWhereInput
    orderBy?: PeakSeasonRateOrderByWithAggregationInput | PeakSeasonRateOrderByWithAggregationInput[]
    by: PeakSeasonRateScalarFieldEnum[] | PeakSeasonRateScalarFieldEnum
    having?: PeakSeasonRateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeakSeasonRateCountAggregateInputType | true
    _avg?: PeakSeasonRateAvgAggregateInputType
    _sum?: PeakSeasonRateSumAggregateInputType
    _min?: PeakSeasonRateMinAggregateInputType
    _max?: PeakSeasonRateMaxAggregateInputType
  }

  export type PeakSeasonRateGroupByOutputType = {
    id: number
    price: number
    startDate: Date
    endDate: Date
    isDeleted: boolean
    roomId: number
    createdAt: Date
    updatedAt: Date
    _count: PeakSeasonRateCountAggregateOutputType | null
    _avg: PeakSeasonRateAvgAggregateOutputType | null
    _sum: PeakSeasonRateSumAggregateOutputType | null
    _min: PeakSeasonRateMinAggregateOutputType | null
    _max: PeakSeasonRateMaxAggregateOutputType | null
  }

  type GetPeakSeasonRateGroupByPayload<T extends PeakSeasonRateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeakSeasonRateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeakSeasonRateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeakSeasonRateGroupByOutputType[P]>
            : GetScalarType<T[P], PeakSeasonRateGroupByOutputType[P]>
        }
      >
    >


  export type PeakSeasonRateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    startDate?: boolean
    endDate?: boolean
    isDeleted?: boolean
    roomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peakSeasonRate"]>

  export type PeakSeasonRateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    startDate?: boolean
    endDate?: boolean
    isDeleted?: boolean
    roomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peakSeasonRate"]>

  export type PeakSeasonRateSelectScalar = {
    id?: boolean
    price?: boolean
    startDate?: boolean
    endDate?: boolean
    isDeleted?: boolean
    roomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PeakSeasonRateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type PeakSeasonRateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $PeakSeasonRatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PeakSeasonRate"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      price: number
      startDate: Date
      endDate: Date
      isDeleted: boolean
      roomId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["peakSeasonRate"]>
    composites: {}
  }

  type PeakSeasonRateGetPayload<S extends boolean | null | undefined | PeakSeasonRateDefaultArgs> = $Result.GetResult<Prisma.$PeakSeasonRatePayload, S>

  type PeakSeasonRateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PeakSeasonRateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PeakSeasonRateCountAggregateInputType | true
    }

  export interface PeakSeasonRateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PeakSeasonRate'], meta: { name: 'PeakSeasonRate' } }
    /**
     * Find zero or one PeakSeasonRate that matches the filter.
     * @param {PeakSeasonRateFindUniqueArgs} args - Arguments to find a PeakSeasonRate
     * @example
     * // Get one PeakSeasonRate
     * const peakSeasonRate = await prisma.peakSeasonRate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeakSeasonRateFindUniqueArgs>(args: SelectSubset<T, PeakSeasonRateFindUniqueArgs<ExtArgs>>): Prisma__PeakSeasonRateClient<$Result.GetResult<Prisma.$PeakSeasonRatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PeakSeasonRate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PeakSeasonRateFindUniqueOrThrowArgs} args - Arguments to find a PeakSeasonRate
     * @example
     * // Get one PeakSeasonRate
     * const peakSeasonRate = await prisma.peakSeasonRate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeakSeasonRateFindUniqueOrThrowArgs>(args: SelectSubset<T, PeakSeasonRateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeakSeasonRateClient<$Result.GetResult<Prisma.$PeakSeasonRatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PeakSeasonRate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeakSeasonRateFindFirstArgs} args - Arguments to find a PeakSeasonRate
     * @example
     * // Get one PeakSeasonRate
     * const peakSeasonRate = await prisma.peakSeasonRate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeakSeasonRateFindFirstArgs>(args?: SelectSubset<T, PeakSeasonRateFindFirstArgs<ExtArgs>>): Prisma__PeakSeasonRateClient<$Result.GetResult<Prisma.$PeakSeasonRatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PeakSeasonRate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeakSeasonRateFindFirstOrThrowArgs} args - Arguments to find a PeakSeasonRate
     * @example
     * // Get one PeakSeasonRate
     * const peakSeasonRate = await prisma.peakSeasonRate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeakSeasonRateFindFirstOrThrowArgs>(args?: SelectSubset<T, PeakSeasonRateFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeakSeasonRateClient<$Result.GetResult<Prisma.$PeakSeasonRatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PeakSeasonRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeakSeasonRateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PeakSeasonRates
     * const peakSeasonRates = await prisma.peakSeasonRate.findMany()
     * 
     * // Get first 10 PeakSeasonRates
     * const peakSeasonRates = await prisma.peakSeasonRate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peakSeasonRateWithIdOnly = await prisma.peakSeasonRate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PeakSeasonRateFindManyArgs>(args?: SelectSubset<T, PeakSeasonRateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeakSeasonRatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PeakSeasonRate.
     * @param {PeakSeasonRateCreateArgs} args - Arguments to create a PeakSeasonRate.
     * @example
     * // Create one PeakSeasonRate
     * const PeakSeasonRate = await prisma.peakSeasonRate.create({
     *   data: {
     *     // ... data to create a PeakSeasonRate
     *   }
     * })
     * 
     */
    create<T extends PeakSeasonRateCreateArgs>(args: SelectSubset<T, PeakSeasonRateCreateArgs<ExtArgs>>): Prisma__PeakSeasonRateClient<$Result.GetResult<Prisma.$PeakSeasonRatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PeakSeasonRates.
     * @param {PeakSeasonRateCreateManyArgs} args - Arguments to create many PeakSeasonRates.
     * @example
     * // Create many PeakSeasonRates
     * const peakSeasonRate = await prisma.peakSeasonRate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeakSeasonRateCreateManyArgs>(args?: SelectSubset<T, PeakSeasonRateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PeakSeasonRates and returns the data saved in the database.
     * @param {PeakSeasonRateCreateManyAndReturnArgs} args - Arguments to create many PeakSeasonRates.
     * @example
     * // Create many PeakSeasonRates
     * const peakSeasonRate = await prisma.peakSeasonRate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PeakSeasonRates and only return the `id`
     * const peakSeasonRateWithIdOnly = await prisma.peakSeasonRate.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeakSeasonRateCreateManyAndReturnArgs>(args?: SelectSubset<T, PeakSeasonRateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeakSeasonRatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PeakSeasonRate.
     * @param {PeakSeasonRateDeleteArgs} args - Arguments to delete one PeakSeasonRate.
     * @example
     * // Delete one PeakSeasonRate
     * const PeakSeasonRate = await prisma.peakSeasonRate.delete({
     *   where: {
     *     // ... filter to delete one PeakSeasonRate
     *   }
     * })
     * 
     */
    delete<T extends PeakSeasonRateDeleteArgs>(args: SelectSubset<T, PeakSeasonRateDeleteArgs<ExtArgs>>): Prisma__PeakSeasonRateClient<$Result.GetResult<Prisma.$PeakSeasonRatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PeakSeasonRate.
     * @param {PeakSeasonRateUpdateArgs} args - Arguments to update one PeakSeasonRate.
     * @example
     * // Update one PeakSeasonRate
     * const peakSeasonRate = await prisma.peakSeasonRate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeakSeasonRateUpdateArgs>(args: SelectSubset<T, PeakSeasonRateUpdateArgs<ExtArgs>>): Prisma__PeakSeasonRateClient<$Result.GetResult<Prisma.$PeakSeasonRatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PeakSeasonRates.
     * @param {PeakSeasonRateDeleteManyArgs} args - Arguments to filter PeakSeasonRates to delete.
     * @example
     * // Delete a few PeakSeasonRates
     * const { count } = await prisma.peakSeasonRate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeakSeasonRateDeleteManyArgs>(args?: SelectSubset<T, PeakSeasonRateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeakSeasonRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeakSeasonRateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PeakSeasonRates
     * const peakSeasonRate = await prisma.peakSeasonRate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeakSeasonRateUpdateManyArgs>(args: SelectSubset<T, PeakSeasonRateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PeakSeasonRate.
     * @param {PeakSeasonRateUpsertArgs} args - Arguments to update or create a PeakSeasonRate.
     * @example
     * // Update or create a PeakSeasonRate
     * const peakSeasonRate = await prisma.peakSeasonRate.upsert({
     *   create: {
     *     // ... data to create a PeakSeasonRate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PeakSeasonRate we want to update
     *   }
     * })
     */
    upsert<T extends PeakSeasonRateUpsertArgs>(args: SelectSubset<T, PeakSeasonRateUpsertArgs<ExtArgs>>): Prisma__PeakSeasonRateClient<$Result.GetResult<Prisma.$PeakSeasonRatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PeakSeasonRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeakSeasonRateCountArgs} args - Arguments to filter PeakSeasonRates to count.
     * @example
     * // Count the number of PeakSeasonRates
     * const count = await prisma.peakSeasonRate.count({
     *   where: {
     *     // ... the filter for the PeakSeasonRates we want to count
     *   }
     * })
    **/
    count<T extends PeakSeasonRateCountArgs>(
      args?: Subset<T, PeakSeasonRateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeakSeasonRateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PeakSeasonRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeakSeasonRateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PeakSeasonRateAggregateArgs>(args: Subset<T, PeakSeasonRateAggregateArgs>): Prisma.PrismaPromise<GetPeakSeasonRateAggregateType<T>>

    /**
     * Group by PeakSeasonRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeakSeasonRateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PeakSeasonRateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeakSeasonRateGroupByArgs['orderBy'] }
        : { orderBy?: PeakSeasonRateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PeakSeasonRateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeakSeasonRateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PeakSeasonRate model
   */
  readonly fields: PeakSeasonRateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PeakSeasonRate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeakSeasonRateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PeakSeasonRate model
   */ 
  interface PeakSeasonRateFieldRefs {
    readonly id: FieldRef<"PeakSeasonRate", 'Int'>
    readonly price: FieldRef<"PeakSeasonRate", 'Int'>
    readonly startDate: FieldRef<"PeakSeasonRate", 'DateTime'>
    readonly endDate: FieldRef<"PeakSeasonRate", 'DateTime'>
    readonly isDeleted: FieldRef<"PeakSeasonRate", 'Boolean'>
    readonly roomId: FieldRef<"PeakSeasonRate", 'Int'>
    readonly createdAt: FieldRef<"PeakSeasonRate", 'DateTime'>
    readonly updatedAt: FieldRef<"PeakSeasonRate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PeakSeasonRate findUnique
   */
  export type PeakSeasonRateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateInclude<ExtArgs> | null
    /**
     * Filter, which PeakSeasonRate to fetch.
     */
    where: PeakSeasonRateWhereUniqueInput
  }

  /**
   * PeakSeasonRate findUniqueOrThrow
   */
  export type PeakSeasonRateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateInclude<ExtArgs> | null
    /**
     * Filter, which PeakSeasonRate to fetch.
     */
    where: PeakSeasonRateWhereUniqueInput
  }

  /**
   * PeakSeasonRate findFirst
   */
  export type PeakSeasonRateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateInclude<ExtArgs> | null
    /**
     * Filter, which PeakSeasonRate to fetch.
     */
    where?: PeakSeasonRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeakSeasonRates to fetch.
     */
    orderBy?: PeakSeasonRateOrderByWithRelationInput | PeakSeasonRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeakSeasonRates.
     */
    cursor?: PeakSeasonRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeakSeasonRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeakSeasonRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeakSeasonRates.
     */
    distinct?: PeakSeasonRateScalarFieldEnum | PeakSeasonRateScalarFieldEnum[]
  }

  /**
   * PeakSeasonRate findFirstOrThrow
   */
  export type PeakSeasonRateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateInclude<ExtArgs> | null
    /**
     * Filter, which PeakSeasonRate to fetch.
     */
    where?: PeakSeasonRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeakSeasonRates to fetch.
     */
    orderBy?: PeakSeasonRateOrderByWithRelationInput | PeakSeasonRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeakSeasonRates.
     */
    cursor?: PeakSeasonRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeakSeasonRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeakSeasonRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeakSeasonRates.
     */
    distinct?: PeakSeasonRateScalarFieldEnum | PeakSeasonRateScalarFieldEnum[]
  }

  /**
   * PeakSeasonRate findMany
   */
  export type PeakSeasonRateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateInclude<ExtArgs> | null
    /**
     * Filter, which PeakSeasonRates to fetch.
     */
    where?: PeakSeasonRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeakSeasonRates to fetch.
     */
    orderBy?: PeakSeasonRateOrderByWithRelationInput | PeakSeasonRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PeakSeasonRates.
     */
    cursor?: PeakSeasonRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeakSeasonRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeakSeasonRates.
     */
    skip?: number
    distinct?: PeakSeasonRateScalarFieldEnum | PeakSeasonRateScalarFieldEnum[]
  }

  /**
   * PeakSeasonRate create
   */
  export type PeakSeasonRateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateInclude<ExtArgs> | null
    /**
     * The data needed to create a PeakSeasonRate.
     */
    data: XOR<PeakSeasonRateCreateInput, PeakSeasonRateUncheckedCreateInput>
  }

  /**
   * PeakSeasonRate createMany
   */
  export type PeakSeasonRateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PeakSeasonRates.
     */
    data: PeakSeasonRateCreateManyInput | PeakSeasonRateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PeakSeasonRate createManyAndReturn
   */
  export type PeakSeasonRateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PeakSeasonRates.
     */
    data: PeakSeasonRateCreateManyInput | PeakSeasonRateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PeakSeasonRate update
   */
  export type PeakSeasonRateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateInclude<ExtArgs> | null
    /**
     * The data needed to update a PeakSeasonRate.
     */
    data: XOR<PeakSeasonRateUpdateInput, PeakSeasonRateUncheckedUpdateInput>
    /**
     * Choose, which PeakSeasonRate to update.
     */
    where: PeakSeasonRateWhereUniqueInput
  }

  /**
   * PeakSeasonRate updateMany
   */
  export type PeakSeasonRateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PeakSeasonRates.
     */
    data: XOR<PeakSeasonRateUpdateManyMutationInput, PeakSeasonRateUncheckedUpdateManyInput>
    /**
     * Filter which PeakSeasonRates to update
     */
    where?: PeakSeasonRateWhereInput
  }

  /**
   * PeakSeasonRate upsert
   */
  export type PeakSeasonRateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateInclude<ExtArgs> | null
    /**
     * The filter to search for the PeakSeasonRate to update in case it exists.
     */
    where: PeakSeasonRateWhereUniqueInput
    /**
     * In case the PeakSeasonRate found by the `where` argument doesn't exist, create a new PeakSeasonRate with this data.
     */
    create: XOR<PeakSeasonRateCreateInput, PeakSeasonRateUncheckedCreateInput>
    /**
     * In case the PeakSeasonRate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeakSeasonRateUpdateInput, PeakSeasonRateUncheckedUpdateInput>
  }

  /**
   * PeakSeasonRate delete
   */
  export type PeakSeasonRateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateInclude<ExtArgs> | null
    /**
     * Filter which PeakSeasonRate to delete.
     */
    where: PeakSeasonRateWhereUniqueInput
  }

  /**
   * PeakSeasonRate deleteMany
   */
  export type PeakSeasonRateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeakSeasonRates to delete
     */
    where?: PeakSeasonRateWhereInput
  }

  /**
   * PeakSeasonRate without action
   */
  export type PeakSeasonRateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateInclude<ExtArgs> | null
  }


  /**
   * Model RoomFacility
   */

  export type AggregateRoomFacility = {
    _count: RoomFacilityCountAggregateOutputType | null
    _avg: RoomFacilityAvgAggregateOutputType | null
    _sum: RoomFacilitySumAggregateOutputType | null
    _min: RoomFacilityMinAggregateOutputType | null
    _max: RoomFacilityMaxAggregateOutputType | null
  }

  export type RoomFacilityAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type RoomFacilitySumAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type RoomFacilityMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    isDeleted: boolean | null
    roomId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomFacilityMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    isDeleted: boolean | null
    roomId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomFacilityCountAggregateOutputType = {
    id: number
    title: number
    description: number
    isDeleted: number
    roomId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomFacilityAvgAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type RoomFacilitySumAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type RoomFacilityMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isDeleted?: true
    roomId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomFacilityMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isDeleted?: true
    roomId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomFacilityCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isDeleted?: true
    roomId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomFacilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomFacility to aggregate.
     */
    where?: RoomFacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomFacilities to fetch.
     */
    orderBy?: RoomFacilityOrderByWithRelationInput | RoomFacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomFacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomFacilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomFacilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomFacilities
    **/
    _count?: true | RoomFacilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomFacilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomFacilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomFacilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomFacilityMaxAggregateInputType
  }

  export type GetRoomFacilityAggregateType<T extends RoomFacilityAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomFacility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomFacility[P]>
      : GetScalarType<T[P], AggregateRoomFacility[P]>
  }




  export type RoomFacilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomFacilityWhereInput
    orderBy?: RoomFacilityOrderByWithAggregationInput | RoomFacilityOrderByWithAggregationInput[]
    by: RoomFacilityScalarFieldEnum[] | RoomFacilityScalarFieldEnum
    having?: RoomFacilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomFacilityCountAggregateInputType | true
    _avg?: RoomFacilityAvgAggregateInputType
    _sum?: RoomFacilitySumAggregateInputType
    _min?: RoomFacilityMinAggregateInputType
    _max?: RoomFacilityMaxAggregateInputType
  }

  export type RoomFacilityGroupByOutputType = {
    id: number
    title: string
    description: string
    isDeleted: boolean
    roomId: number
    createdAt: Date
    updatedAt: Date
    _count: RoomFacilityCountAggregateOutputType | null
    _avg: RoomFacilityAvgAggregateOutputType | null
    _sum: RoomFacilitySumAggregateOutputType | null
    _min: RoomFacilityMinAggregateOutputType | null
    _max: RoomFacilityMaxAggregateOutputType | null
  }

  type GetRoomFacilityGroupByPayload<T extends RoomFacilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomFacilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomFacilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomFacilityGroupByOutputType[P]>
            : GetScalarType<T[P], RoomFacilityGroupByOutputType[P]>
        }
      >
    >


  export type RoomFacilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isDeleted?: boolean
    roomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomFacility"]>

  export type RoomFacilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isDeleted?: boolean
    roomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomFacility"]>

  export type RoomFacilitySelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    isDeleted?: boolean
    roomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomFacilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type RoomFacilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $RoomFacilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomFacility"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      isDeleted: boolean
      roomId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["roomFacility"]>
    composites: {}
  }

  type RoomFacilityGetPayload<S extends boolean | null | undefined | RoomFacilityDefaultArgs> = $Result.GetResult<Prisma.$RoomFacilityPayload, S>

  type RoomFacilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoomFacilityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoomFacilityCountAggregateInputType | true
    }

  export interface RoomFacilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomFacility'], meta: { name: 'RoomFacility' } }
    /**
     * Find zero or one RoomFacility that matches the filter.
     * @param {RoomFacilityFindUniqueArgs} args - Arguments to find a RoomFacility
     * @example
     * // Get one RoomFacility
     * const roomFacility = await prisma.roomFacility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFacilityFindUniqueArgs>(args: SelectSubset<T, RoomFacilityFindUniqueArgs<ExtArgs>>): Prisma__RoomFacilityClient<$Result.GetResult<Prisma.$RoomFacilityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RoomFacility that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoomFacilityFindUniqueOrThrowArgs} args - Arguments to find a RoomFacility
     * @example
     * // Get one RoomFacility
     * const roomFacility = await prisma.roomFacility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFacilityFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFacilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomFacilityClient<$Result.GetResult<Prisma.$RoomFacilityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RoomFacility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFacilityFindFirstArgs} args - Arguments to find a RoomFacility
     * @example
     * // Get one RoomFacility
     * const roomFacility = await prisma.roomFacility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFacilityFindFirstArgs>(args?: SelectSubset<T, RoomFacilityFindFirstArgs<ExtArgs>>): Prisma__RoomFacilityClient<$Result.GetResult<Prisma.$RoomFacilityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RoomFacility that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFacilityFindFirstOrThrowArgs} args - Arguments to find a RoomFacility
     * @example
     * // Get one RoomFacility
     * const roomFacility = await prisma.roomFacility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFacilityFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFacilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomFacilityClient<$Result.GetResult<Prisma.$RoomFacilityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RoomFacilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFacilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomFacilities
     * const roomFacilities = await prisma.roomFacility.findMany()
     * 
     * // Get first 10 RoomFacilities
     * const roomFacilities = await prisma.roomFacility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomFacilityWithIdOnly = await prisma.roomFacility.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFacilityFindManyArgs>(args?: SelectSubset<T, RoomFacilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomFacilityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RoomFacility.
     * @param {RoomFacilityCreateArgs} args - Arguments to create a RoomFacility.
     * @example
     * // Create one RoomFacility
     * const RoomFacility = await prisma.roomFacility.create({
     *   data: {
     *     // ... data to create a RoomFacility
     *   }
     * })
     * 
     */
    create<T extends RoomFacilityCreateArgs>(args: SelectSubset<T, RoomFacilityCreateArgs<ExtArgs>>): Prisma__RoomFacilityClient<$Result.GetResult<Prisma.$RoomFacilityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RoomFacilities.
     * @param {RoomFacilityCreateManyArgs} args - Arguments to create many RoomFacilities.
     * @example
     * // Create many RoomFacilities
     * const roomFacility = await prisma.roomFacility.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomFacilityCreateManyArgs>(args?: SelectSubset<T, RoomFacilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomFacilities and returns the data saved in the database.
     * @param {RoomFacilityCreateManyAndReturnArgs} args - Arguments to create many RoomFacilities.
     * @example
     * // Create many RoomFacilities
     * const roomFacility = await prisma.roomFacility.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomFacilities and only return the `id`
     * const roomFacilityWithIdOnly = await prisma.roomFacility.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomFacilityCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomFacilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomFacilityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RoomFacility.
     * @param {RoomFacilityDeleteArgs} args - Arguments to delete one RoomFacility.
     * @example
     * // Delete one RoomFacility
     * const RoomFacility = await prisma.roomFacility.delete({
     *   where: {
     *     // ... filter to delete one RoomFacility
     *   }
     * })
     * 
     */
    delete<T extends RoomFacilityDeleteArgs>(args: SelectSubset<T, RoomFacilityDeleteArgs<ExtArgs>>): Prisma__RoomFacilityClient<$Result.GetResult<Prisma.$RoomFacilityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RoomFacility.
     * @param {RoomFacilityUpdateArgs} args - Arguments to update one RoomFacility.
     * @example
     * // Update one RoomFacility
     * const roomFacility = await prisma.roomFacility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomFacilityUpdateArgs>(args: SelectSubset<T, RoomFacilityUpdateArgs<ExtArgs>>): Prisma__RoomFacilityClient<$Result.GetResult<Prisma.$RoomFacilityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RoomFacilities.
     * @param {RoomFacilityDeleteManyArgs} args - Arguments to filter RoomFacilities to delete.
     * @example
     * // Delete a few RoomFacilities
     * const { count } = await prisma.roomFacility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomFacilityDeleteManyArgs>(args?: SelectSubset<T, RoomFacilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomFacilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFacilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomFacilities
     * const roomFacility = await prisma.roomFacility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomFacilityUpdateManyArgs>(args: SelectSubset<T, RoomFacilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomFacility.
     * @param {RoomFacilityUpsertArgs} args - Arguments to update or create a RoomFacility.
     * @example
     * // Update or create a RoomFacility
     * const roomFacility = await prisma.roomFacility.upsert({
     *   create: {
     *     // ... data to create a RoomFacility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomFacility we want to update
     *   }
     * })
     */
    upsert<T extends RoomFacilityUpsertArgs>(args: SelectSubset<T, RoomFacilityUpsertArgs<ExtArgs>>): Prisma__RoomFacilityClient<$Result.GetResult<Prisma.$RoomFacilityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RoomFacilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFacilityCountArgs} args - Arguments to filter RoomFacilities to count.
     * @example
     * // Count the number of RoomFacilities
     * const count = await prisma.roomFacility.count({
     *   where: {
     *     // ... the filter for the RoomFacilities we want to count
     *   }
     * })
    **/
    count<T extends RoomFacilityCountArgs>(
      args?: Subset<T, RoomFacilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomFacilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomFacility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFacilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomFacilityAggregateArgs>(args: Subset<T, RoomFacilityAggregateArgs>): Prisma.PrismaPromise<GetRoomFacilityAggregateType<T>>

    /**
     * Group by RoomFacility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFacilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomFacilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomFacilityGroupByArgs['orderBy'] }
        : { orderBy?: RoomFacilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomFacilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomFacilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomFacility model
   */
  readonly fields: RoomFacilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomFacility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomFacilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomFacility model
   */ 
  interface RoomFacilityFieldRefs {
    readonly id: FieldRef<"RoomFacility", 'Int'>
    readonly title: FieldRef<"RoomFacility", 'String'>
    readonly description: FieldRef<"RoomFacility", 'String'>
    readonly isDeleted: FieldRef<"RoomFacility", 'Boolean'>
    readonly roomId: FieldRef<"RoomFacility", 'Int'>
    readonly createdAt: FieldRef<"RoomFacility", 'DateTime'>
    readonly updatedAt: FieldRef<"RoomFacility", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomFacility findUnique
   */
  export type RoomFacilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomFacility
     */
    select?: RoomFacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomFacilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomFacility to fetch.
     */
    where: RoomFacilityWhereUniqueInput
  }

  /**
   * RoomFacility findUniqueOrThrow
   */
  export type RoomFacilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomFacility
     */
    select?: RoomFacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomFacilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomFacility to fetch.
     */
    where: RoomFacilityWhereUniqueInput
  }

  /**
   * RoomFacility findFirst
   */
  export type RoomFacilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomFacility
     */
    select?: RoomFacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomFacilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomFacility to fetch.
     */
    where?: RoomFacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomFacilities to fetch.
     */
    orderBy?: RoomFacilityOrderByWithRelationInput | RoomFacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomFacilities.
     */
    cursor?: RoomFacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomFacilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomFacilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomFacilities.
     */
    distinct?: RoomFacilityScalarFieldEnum | RoomFacilityScalarFieldEnum[]
  }

  /**
   * RoomFacility findFirstOrThrow
   */
  export type RoomFacilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomFacility
     */
    select?: RoomFacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomFacilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomFacility to fetch.
     */
    where?: RoomFacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomFacilities to fetch.
     */
    orderBy?: RoomFacilityOrderByWithRelationInput | RoomFacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomFacilities.
     */
    cursor?: RoomFacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomFacilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomFacilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomFacilities.
     */
    distinct?: RoomFacilityScalarFieldEnum | RoomFacilityScalarFieldEnum[]
  }

  /**
   * RoomFacility findMany
   */
  export type RoomFacilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomFacility
     */
    select?: RoomFacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomFacilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomFacilities to fetch.
     */
    where?: RoomFacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomFacilities to fetch.
     */
    orderBy?: RoomFacilityOrderByWithRelationInput | RoomFacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomFacilities.
     */
    cursor?: RoomFacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomFacilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomFacilities.
     */
    skip?: number
    distinct?: RoomFacilityScalarFieldEnum | RoomFacilityScalarFieldEnum[]
  }

  /**
   * RoomFacility create
   */
  export type RoomFacilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomFacility
     */
    select?: RoomFacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomFacilityInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomFacility.
     */
    data: XOR<RoomFacilityCreateInput, RoomFacilityUncheckedCreateInput>
  }

  /**
   * RoomFacility createMany
   */
  export type RoomFacilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomFacilities.
     */
    data: RoomFacilityCreateManyInput | RoomFacilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomFacility createManyAndReturn
   */
  export type RoomFacilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomFacility
     */
    select?: RoomFacilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RoomFacilities.
     */
    data: RoomFacilityCreateManyInput | RoomFacilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomFacilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomFacility update
   */
  export type RoomFacilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomFacility
     */
    select?: RoomFacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomFacilityInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomFacility.
     */
    data: XOR<RoomFacilityUpdateInput, RoomFacilityUncheckedUpdateInput>
    /**
     * Choose, which RoomFacility to update.
     */
    where: RoomFacilityWhereUniqueInput
  }

  /**
   * RoomFacility updateMany
   */
  export type RoomFacilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomFacilities.
     */
    data: XOR<RoomFacilityUpdateManyMutationInput, RoomFacilityUncheckedUpdateManyInput>
    /**
     * Filter which RoomFacilities to update
     */
    where?: RoomFacilityWhereInput
  }

  /**
   * RoomFacility upsert
   */
  export type RoomFacilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomFacility
     */
    select?: RoomFacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomFacilityInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomFacility to update in case it exists.
     */
    where: RoomFacilityWhereUniqueInput
    /**
     * In case the RoomFacility found by the `where` argument doesn't exist, create a new RoomFacility with this data.
     */
    create: XOR<RoomFacilityCreateInput, RoomFacilityUncheckedCreateInput>
    /**
     * In case the RoomFacility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomFacilityUpdateInput, RoomFacilityUncheckedUpdateInput>
  }

  /**
   * RoomFacility delete
   */
  export type RoomFacilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomFacility
     */
    select?: RoomFacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomFacilityInclude<ExtArgs> | null
    /**
     * Filter which RoomFacility to delete.
     */
    where: RoomFacilityWhereUniqueInput
  }

  /**
   * RoomFacility deleteMany
   */
  export type RoomFacilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomFacilities to delete
     */
    where?: RoomFacilityWhereInput
  }

  /**
   * RoomFacility without action
   */
  export type RoomFacilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomFacility
     */
    select?: RoomFacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomFacilityInclude<ExtArgs> | null
  }


  /**
   * Model RoomImage
   */

  export type AggregateRoomImage = {
    _count: RoomImageCountAggregateOutputType | null
    _avg: RoomImageAvgAggregateOutputType | null
    _sum: RoomImageSumAggregateOutputType | null
    _min: RoomImageMinAggregateOutputType | null
    _max: RoomImageMaxAggregateOutputType | null
  }

  export type RoomImageAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type RoomImageSumAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type RoomImageMinAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    isDeleted: boolean | null
    roomId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomImageMaxAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    isDeleted: boolean | null
    roomId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomImageCountAggregateOutputType = {
    id: number
    imageUrl: number
    isDeleted: number
    roomId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomImageAvgAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type RoomImageSumAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type RoomImageMinAggregateInputType = {
    id?: true
    imageUrl?: true
    isDeleted?: true
    roomId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomImageMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    isDeleted?: true
    roomId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomImageCountAggregateInputType = {
    id?: true
    imageUrl?: true
    isDeleted?: true
    roomId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomImage to aggregate.
     */
    where?: RoomImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomImages to fetch.
     */
    orderBy?: RoomImageOrderByWithRelationInput | RoomImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomImages
    **/
    _count?: true | RoomImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomImageMaxAggregateInputType
  }

  export type GetRoomImageAggregateType<T extends RoomImageAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomImage[P]>
      : GetScalarType<T[P], AggregateRoomImage[P]>
  }




  export type RoomImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomImageWhereInput
    orderBy?: RoomImageOrderByWithAggregationInput | RoomImageOrderByWithAggregationInput[]
    by: RoomImageScalarFieldEnum[] | RoomImageScalarFieldEnum
    having?: RoomImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomImageCountAggregateInputType | true
    _avg?: RoomImageAvgAggregateInputType
    _sum?: RoomImageSumAggregateInputType
    _min?: RoomImageMinAggregateInputType
    _max?: RoomImageMaxAggregateInputType
  }

  export type RoomImageGroupByOutputType = {
    id: number
    imageUrl: string | null
    isDeleted: boolean
    roomId: number
    createdAt: Date
    updatedAt: Date
    _count: RoomImageCountAggregateOutputType | null
    _avg: RoomImageAvgAggregateOutputType | null
    _sum: RoomImageSumAggregateOutputType | null
    _min: RoomImageMinAggregateOutputType | null
    _max: RoomImageMaxAggregateOutputType | null
  }

  type GetRoomImageGroupByPayload<T extends RoomImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomImageGroupByOutputType[P]>
            : GetScalarType<T[P], RoomImageGroupByOutputType[P]>
        }
      >
    >


  export type RoomImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    isDeleted?: boolean
    roomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomImage"]>

  export type RoomImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    isDeleted?: boolean
    roomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomImage"]>

  export type RoomImageSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    isDeleted?: boolean
    roomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type RoomImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $RoomImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomImage"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imageUrl: string | null
      isDeleted: boolean
      roomId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["roomImage"]>
    composites: {}
  }

  type RoomImageGetPayload<S extends boolean | null | undefined | RoomImageDefaultArgs> = $Result.GetResult<Prisma.$RoomImagePayload, S>

  type RoomImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoomImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoomImageCountAggregateInputType | true
    }

  export interface RoomImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomImage'], meta: { name: 'RoomImage' } }
    /**
     * Find zero or one RoomImage that matches the filter.
     * @param {RoomImageFindUniqueArgs} args - Arguments to find a RoomImage
     * @example
     * // Get one RoomImage
     * const roomImage = await prisma.roomImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomImageFindUniqueArgs>(args: SelectSubset<T, RoomImageFindUniqueArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RoomImage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoomImageFindUniqueOrThrowArgs} args - Arguments to find a RoomImage
     * @example
     * // Get one RoomImage
     * const roomImage = await prisma.roomImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomImageFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RoomImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageFindFirstArgs} args - Arguments to find a RoomImage
     * @example
     * // Get one RoomImage
     * const roomImage = await prisma.roomImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomImageFindFirstArgs>(args?: SelectSubset<T, RoomImageFindFirstArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RoomImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageFindFirstOrThrowArgs} args - Arguments to find a RoomImage
     * @example
     * // Get one RoomImage
     * const roomImage = await prisma.roomImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomImageFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RoomImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomImages
     * const roomImages = await prisma.roomImage.findMany()
     * 
     * // Get first 10 RoomImages
     * const roomImages = await prisma.roomImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomImageWithIdOnly = await prisma.roomImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomImageFindManyArgs>(args?: SelectSubset<T, RoomImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RoomImage.
     * @param {RoomImageCreateArgs} args - Arguments to create a RoomImage.
     * @example
     * // Create one RoomImage
     * const RoomImage = await prisma.roomImage.create({
     *   data: {
     *     // ... data to create a RoomImage
     *   }
     * })
     * 
     */
    create<T extends RoomImageCreateArgs>(args: SelectSubset<T, RoomImageCreateArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RoomImages.
     * @param {RoomImageCreateManyArgs} args - Arguments to create many RoomImages.
     * @example
     * // Create many RoomImages
     * const roomImage = await prisma.roomImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomImageCreateManyArgs>(args?: SelectSubset<T, RoomImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomImages and returns the data saved in the database.
     * @param {RoomImageCreateManyAndReturnArgs} args - Arguments to create many RoomImages.
     * @example
     * // Create many RoomImages
     * const roomImage = await prisma.roomImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomImages and only return the `id`
     * const roomImageWithIdOnly = await prisma.roomImage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomImageCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RoomImage.
     * @param {RoomImageDeleteArgs} args - Arguments to delete one RoomImage.
     * @example
     * // Delete one RoomImage
     * const RoomImage = await prisma.roomImage.delete({
     *   where: {
     *     // ... filter to delete one RoomImage
     *   }
     * })
     * 
     */
    delete<T extends RoomImageDeleteArgs>(args: SelectSubset<T, RoomImageDeleteArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RoomImage.
     * @param {RoomImageUpdateArgs} args - Arguments to update one RoomImage.
     * @example
     * // Update one RoomImage
     * const roomImage = await prisma.roomImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomImageUpdateArgs>(args: SelectSubset<T, RoomImageUpdateArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RoomImages.
     * @param {RoomImageDeleteManyArgs} args - Arguments to filter RoomImages to delete.
     * @example
     * // Delete a few RoomImages
     * const { count } = await prisma.roomImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomImageDeleteManyArgs>(args?: SelectSubset<T, RoomImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomImages
     * const roomImage = await prisma.roomImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomImageUpdateManyArgs>(args: SelectSubset<T, RoomImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomImage.
     * @param {RoomImageUpsertArgs} args - Arguments to update or create a RoomImage.
     * @example
     * // Update or create a RoomImage
     * const roomImage = await prisma.roomImage.upsert({
     *   create: {
     *     // ... data to create a RoomImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomImage we want to update
     *   }
     * })
     */
    upsert<T extends RoomImageUpsertArgs>(args: SelectSubset<T, RoomImageUpsertArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RoomImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageCountArgs} args - Arguments to filter RoomImages to count.
     * @example
     * // Count the number of RoomImages
     * const count = await prisma.roomImage.count({
     *   where: {
     *     // ... the filter for the RoomImages we want to count
     *   }
     * })
    **/
    count<T extends RoomImageCountArgs>(
      args?: Subset<T, RoomImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomImageAggregateArgs>(args: Subset<T, RoomImageAggregateArgs>): Prisma.PrismaPromise<GetRoomImageAggregateType<T>>

    /**
     * Group by RoomImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomImageGroupByArgs['orderBy'] }
        : { orderBy?: RoomImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomImage model
   */
  readonly fields: RoomImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomImage model
   */ 
  interface RoomImageFieldRefs {
    readonly id: FieldRef<"RoomImage", 'Int'>
    readonly imageUrl: FieldRef<"RoomImage", 'String'>
    readonly isDeleted: FieldRef<"RoomImage", 'Boolean'>
    readonly roomId: FieldRef<"RoomImage", 'Int'>
    readonly createdAt: FieldRef<"RoomImage", 'DateTime'>
    readonly updatedAt: FieldRef<"RoomImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomImage findUnique
   */
  export type RoomImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomImage to fetch.
     */
    where: RoomImageWhereUniqueInput
  }

  /**
   * RoomImage findUniqueOrThrow
   */
  export type RoomImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomImage to fetch.
     */
    where: RoomImageWhereUniqueInput
  }

  /**
   * RoomImage findFirst
   */
  export type RoomImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomImage to fetch.
     */
    where?: RoomImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomImages to fetch.
     */
    orderBy?: RoomImageOrderByWithRelationInput | RoomImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomImages.
     */
    cursor?: RoomImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomImages.
     */
    distinct?: RoomImageScalarFieldEnum | RoomImageScalarFieldEnum[]
  }

  /**
   * RoomImage findFirstOrThrow
   */
  export type RoomImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomImage to fetch.
     */
    where?: RoomImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomImages to fetch.
     */
    orderBy?: RoomImageOrderByWithRelationInput | RoomImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomImages.
     */
    cursor?: RoomImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomImages.
     */
    distinct?: RoomImageScalarFieldEnum | RoomImageScalarFieldEnum[]
  }

  /**
   * RoomImage findMany
   */
  export type RoomImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomImages to fetch.
     */
    where?: RoomImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomImages to fetch.
     */
    orderBy?: RoomImageOrderByWithRelationInput | RoomImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomImages.
     */
    cursor?: RoomImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomImages.
     */
    skip?: number
    distinct?: RoomImageScalarFieldEnum | RoomImageScalarFieldEnum[]
  }

  /**
   * RoomImage create
   */
  export type RoomImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomImage.
     */
    data: XOR<RoomImageCreateInput, RoomImageUncheckedCreateInput>
  }

  /**
   * RoomImage createMany
   */
  export type RoomImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomImages.
     */
    data: RoomImageCreateManyInput | RoomImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomImage createManyAndReturn
   */
  export type RoomImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RoomImages.
     */
    data: RoomImageCreateManyInput | RoomImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomImage update
   */
  export type RoomImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomImage.
     */
    data: XOR<RoomImageUpdateInput, RoomImageUncheckedUpdateInput>
    /**
     * Choose, which RoomImage to update.
     */
    where: RoomImageWhereUniqueInput
  }

  /**
   * RoomImage updateMany
   */
  export type RoomImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomImages.
     */
    data: XOR<RoomImageUpdateManyMutationInput, RoomImageUncheckedUpdateManyInput>
    /**
     * Filter which RoomImages to update
     */
    where?: RoomImageWhereInput
  }

  /**
   * RoomImage upsert
   */
  export type RoomImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomImage to update in case it exists.
     */
    where: RoomImageWhereUniqueInput
    /**
     * In case the RoomImage found by the `where` argument doesn't exist, create a new RoomImage with this data.
     */
    create: XOR<RoomImageCreateInput, RoomImageUncheckedCreateInput>
    /**
     * In case the RoomImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomImageUpdateInput, RoomImageUncheckedUpdateInput>
  }

  /**
   * RoomImage delete
   */
  export type RoomImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * Filter which RoomImage to delete.
     */
    where: RoomImageWhereUniqueInput
  }

  /**
   * RoomImage deleteMany
   */
  export type RoomImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomImages to delete
     */
    where?: RoomImageWhereInput
  }

  /**
   * RoomImage without action
   */
  export type RoomImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
  }


  /**
   * Model RoomNonAvailability
   */

  export type AggregateRoomNonAvailability = {
    _count: RoomNonAvailabilityCountAggregateOutputType | null
    _avg: RoomNonAvailabilityAvgAggregateOutputType | null
    _sum: RoomNonAvailabilitySumAggregateOutputType | null
    _min: RoomNonAvailabilityMinAggregateOutputType | null
    _max: RoomNonAvailabilityMaxAggregateOutputType | null
  }

  export type RoomNonAvailabilityAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type RoomNonAvailabilitySumAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type RoomNonAvailabilityMinAggregateOutputType = {
    id: number | null
    startDate: Date | null
    endDate: Date | null
    isDeleted: boolean | null
    reason: string | null
    roomId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomNonAvailabilityMaxAggregateOutputType = {
    id: number | null
    startDate: Date | null
    endDate: Date | null
    isDeleted: boolean | null
    reason: string | null
    roomId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomNonAvailabilityCountAggregateOutputType = {
    id: number
    startDate: number
    endDate: number
    isDeleted: number
    reason: number
    roomId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomNonAvailabilityAvgAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type RoomNonAvailabilitySumAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type RoomNonAvailabilityMinAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    isDeleted?: true
    reason?: true
    roomId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomNonAvailabilityMaxAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    isDeleted?: true
    reason?: true
    roomId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomNonAvailabilityCountAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    isDeleted?: true
    reason?: true
    roomId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomNonAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomNonAvailability to aggregate.
     */
    where?: RoomNonAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomNonAvailabilities to fetch.
     */
    orderBy?: RoomNonAvailabilityOrderByWithRelationInput | RoomNonAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomNonAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomNonAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomNonAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomNonAvailabilities
    **/
    _count?: true | RoomNonAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomNonAvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomNonAvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomNonAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomNonAvailabilityMaxAggregateInputType
  }

  export type GetRoomNonAvailabilityAggregateType<T extends RoomNonAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomNonAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomNonAvailability[P]>
      : GetScalarType<T[P], AggregateRoomNonAvailability[P]>
  }




  export type RoomNonAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomNonAvailabilityWhereInput
    orderBy?: RoomNonAvailabilityOrderByWithAggregationInput | RoomNonAvailabilityOrderByWithAggregationInput[]
    by: RoomNonAvailabilityScalarFieldEnum[] | RoomNonAvailabilityScalarFieldEnum
    having?: RoomNonAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomNonAvailabilityCountAggregateInputType | true
    _avg?: RoomNonAvailabilityAvgAggregateInputType
    _sum?: RoomNonAvailabilitySumAggregateInputType
    _min?: RoomNonAvailabilityMinAggregateInputType
    _max?: RoomNonAvailabilityMaxAggregateInputType
  }

  export type RoomNonAvailabilityGroupByOutputType = {
    id: number
    startDate: Date
    endDate: Date
    isDeleted: boolean
    reason: string | null
    roomId: number
    createdAt: Date
    updatedAt: Date
    _count: RoomNonAvailabilityCountAggregateOutputType | null
    _avg: RoomNonAvailabilityAvgAggregateOutputType | null
    _sum: RoomNonAvailabilitySumAggregateOutputType | null
    _min: RoomNonAvailabilityMinAggregateOutputType | null
    _max: RoomNonAvailabilityMaxAggregateOutputType | null
  }

  type GetRoomNonAvailabilityGroupByPayload<T extends RoomNonAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomNonAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomNonAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomNonAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], RoomNonAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type RoomNonAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    isDeleted?: boolean
    reason?: boolean
    roomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomNonAvailability"]>

  export type RoomNonAvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    isDeleted?: boolean
    reason?: boolean
    roomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomNonAvailability"]>

  export type RoomNonAvailabilitySelectScalar = {
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    isDeleted?: boolean
    reason?: boolean
    roomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomNonAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type RoomNonAvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $RoomNonAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomNonAvailability"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      startDate: Date
      endDate: Date
      isDeleted: boolean
      reason: string | null
      roomId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["roomNonAvailability"]>
    composites: {}
  }

  type RoomNonAvailabilityGetPayload<S extends boolean | null | undefined | RoomNonAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$RoomNonAvailabilityPayload, S>

  type RoomNonAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoomNonAvailabilityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoomNonAvailabilityCountAggregateInputType | true
    }

  export interface RoomNonAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomNonAvailability'], meta: { name: 'RoomNonAvailability' } }
    /**
     * Find zero or one RoomNonAvailability that matches the filter.
     * @param {RoomNonAvailabilityFindUniqueArgs} args - Arguments to find a RoomNonAvailability
     * @example
     * // Get one RoomNonAvailability
     * const roomNonAvailability = await prisma.roomNonAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomNonAvailabilityFindUniqueArgs>(args: SelectSubset<T, RoomNonAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__RoomNonAvailabilityClient<$Result.GetResult<Prisma.$RoomNonAvailabilityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RoomNonAvailability that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoomNonAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a RoomNonAvailability
     * @example
     * // Get one RoomNonAvailability
     * const roomNonAvailability = await prisma.roomNonAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomNonAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomNonAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomNonAvailabilityClient<$Result.GetResult<Prisma.$RoomNonAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RoomNonAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomNonAvailabilityFindFirstArgs} args - Arguments to find a RoomNonAvailability
     * @example
     * // Get one RoomNonAvailability
     * const roomNonAvailability = await prisma.roomNonAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomNonAvailabilityFindFirstArgs>(args?: SelectSubset<T, RoomNonAvailabilityFindFirstArgs<ExtArgs>>): Prisma__RoomNonAvailabilityClient<$Result.GetResult<Prisma.$RoomNonAvailabilityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RoomNonAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomNonAvailabilityFindFirstOrThrowArgs} args - Arguments to find a RoomNonAvailability
     * @example
     * // Get one RoomNonAvailability
     * const roomNonAvailability = await prisma.roomNonAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomNonAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomNonAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomNonAvailabilityClient<$Result.GetResult<Prisma.$RoomNonAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RoomNonAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomNonAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomNonAvailabilities
     * const roomNonAvailabilities = await prisma.roomNonAvailability.findMany()
     * 
     * // Get first 10 RoomNonAvailabilities
     * const roomNonAvailabilities = await prisma.roomNonAvailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomNonAvailabilityWithIdOnly = await prisma.roomNonAvailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomNonAvailabilityFindManyArgs>(args?: SelectSubset<T, RoomNonAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomNonAvailabilityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RoomNonAvailability.
     * @param {RoomNonAvailabilityCreateArgs} args - Arguments to create a RoomNonAvailability.
     * @example
     * // Create one RoomNonAvailability
     * const RoomNonAvailability = await prisma.roomNonAvailability.create({
     *   data: {
     *     // ... data to create a RoomNonAvailability
     *   }
     * })
     * 
     */
    create<T extends RoomNonAvailabilityCreateArgs>(args: SelectSubset<T, RoomNonAvailabilityCreateArgs<ExtArgs>>): Prisma__RoomNonAvailabilityClient<$Result.GetResult<Prisma.$RoomNonAvailabilityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RoomNonAvailabilities.
     * @param {RoomNonAvailabilityCreateManyArgs} args - Arguments to create many RoomNonAvailabilities.
     * @example
     * // Create many RoomNonAvailabilities
     * const roomNonAvailability = await prisma.roomNonAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomNonAvailabilityCreateManyArgs>(args?: SelectSubset<T, RoomNonAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomNonAvailabilities and returns the data saved in the database.
     * @param {RoomNonAvailabilityCreateManyAndReturnArgs} args - Arguments to create many RoomNonAvailabilities.
     * @example
     * // Create many RoomNonAvailabilities
     * const roomNonAvailability = await prisma.roomNonAvailability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomNonAvailabilities and only return the `id`
     * const roomNonAvailabilityWithIdOnly = await prisma.roomNonAvailability.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomNonAvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomNonAvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomNonAvailabilityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RoomNonAvailability.
     * @param {RoomNonAvailabilityDeleteArgs} args - Arguments to delete one RoomNonAvailability.
     * @example
     * // Delete one RoomNonAvailability
     * const RoomNonAvailability = await prisma.roomNonAvailability.delete({
     *   where: {
     *     // ... filter to delete one RoomNonAvailability
     *   }
     * })
     * 
     */
    delete<T extends RoomNonAvailabilityDeleteArgs>(args: SelectSubset<T, RoomNonAvailabilityDeleteArgs<ExtArgs>>): Prisma__RoomNonAvailabilityClient<$Result.GetResult<Prisma.$RoomNonAvailabilityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RoomNonAvailability.
     * @param {RoomNonAvailabilityUpdateArgs} args - Arguments to update one RoomNonAvailability.
     * @example
     * // Update one RoomNonAvailability
     * const roomNonAvailability = await prisma.roomNonAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomNonAvailabilityUpdateArgs>(args: SelectSubset<T, RoomNonAvailabilityUpdateArgs<ExtArgs>>): Prisma__RoomNonAvailabilityClient<$Result.GetResult<Prisma.$RoomNonAvailabilityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RoomNonAvailabilities.
     * @param {RoomNonAvailabilityDeleteManyArgs} args - Arguments to filter RoomNonAvailabilities to delete.
     * @example
     * // Delete a few RoomNonAvailabilities
     * const { count } = await prisma.roomNonAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomNonAvailabilityDeleteManyArgs>(args?: SelectSubset<T, RoomNonAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomNonAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomNonAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomNonAvailabilities
     * const roomNonAvailability = await prisma.roomNonAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomNonAvailabilityUpdateManyArgs>(args: SelectSubset<T, RoomNonAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomNonAvailability.
     * @param {RoomNonAvailabilityUpsertArgs} args - Arguments to update or create a RoomNonAvailability.
     * @example
     * // Update or create a RoomNonAvailability
     * const roomNonAvailability = await prisma.roomNonAvailability.upsert({
     *   create: {
     *     // ... data to create a RoomNonAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomNonAvailability we want to update
     *   }
     * })
     */
    upsert<T extends RoomNonAvailabilityUpsertArgs>(args: SelectSubset<T, RoomNonAvailabilityUpsertArgs<ExtArgs>>): Prisma__RoomNonAvailabilityClient<$Result.GetResult<Prisma.$RoomNonAvailabilityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RoomNonAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomNonAvailabilityCountArgs} args - Arguments to filter RoomNonAvailabilities to count.
     * @example
     * // Count the number of RoomNonAvailabilities
     * const count = await prisma.roomNonAvailability.count({
     *   where: {
     *     // ... the filter for the RoomNonAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends RoomNonAvailabilityCountArgs>(
      args?: Subset<T, RoomNonAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomNonAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomNonAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomNonAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomNonAvailabilityAggregateArgs>(args: Subset<T, RoomNonAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetRoomNonAvailabilityAggregateType<T>>

    /**
     * Group by RoomNonAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomNonAvailabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomNonAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomNonAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: RoomNonAvailabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomNonAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomNonAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomNonAvailability model
   */
  readonly fields: RoomNonAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomNonAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomNonAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomNonAvailability model
   */ 
  interface RoomNonAvailabilityFieldRefs {
    readonly id: FieldRef<"RoomNonAvailability", 'Int'>
    readonly startDate: FieldRef<"RoomNonAvailability", 'DateTime'>
    readonly endDate: FieldRef<"RoomNonAvailability", 'DateTime'>
    readonly isDeleted: FieldRef<"RoomNonAvailability", 'Boolean'>
    readonly reason: FieldRef<"RoomNonAvailability", 'String'>
    readonly roomId: FieldRef<"RoomNonAvailability", 'Int'>
    readonly createdAt: FieldRef<"RoomNonAvailability", 'DateTime'>
    readonly updatedAt: FieldRef<"RoomNonAvailability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomNonAvailability findUnique
   */
  export type RoomNonAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNonAvailability
     */
    select?: RoomNonAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNonAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomNonAvailability to fetch.
     */
    where: RoomNonAvailabilityWhereUniqueInput
  }

  /**
   * RoomNonAvailability findUniqueOrThrow
   */
  export type RoomNonAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNonAvailability
     */
    select?: RoomNonAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNonAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomNonAvailability to fetch.
     */
    where: RoomNonAvailabilityWhereUniqueInput
  }

  /**
   * RoomNonAvailability findFirst
   */
  export type RoomNonAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNonAvailability
     */
    select?: RoomNonAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNonAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomNonAvailability to fetch.
     */
    where?: RoomNonAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomNonAvailabilities to fetch.
     */
    orderBy?: RoomNonAvailabilityOrderByWithRelationInput | RoomNonAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomNonAvailabilities.
     */
    cursor?: RoomNonAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomNonAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomNonAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomNonAvailabilities.
     */
    distinct?: RoomNonAvailabilityScalarFieldEnum | RoomNonAvailabilityScalarFieldEnum[]
  }

  /**
   * RoomNonAvailability findFirstOrThrow
   */
  export type RoomNonAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNonAvailability
     */
    select?: RoomNonAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNonAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomNonAvailability to fetch.
     */
    where?: RoomNonAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomNonAvailabilities to fetch.
     */
    orderBy?: RoomNonAvailabilityOrderByWithRelationInput | RoomNonAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomNonAvailabilities.
     */
    cursor?: RoomNonAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomNonAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomNonAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomNonAvailabilities.
     */
    distinct?: RoomNonAvailabilityScalarFieldEnum | RoomNonAvailabilityScalarFieldEnum[]
  }

  /**
   * RoomNonAvailability findMany
   */
  export type RoomNonAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNonAvailability
     */
    select?: RoomNonAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNonAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomNonAvailabilities to fetch.
     */
    where?: RoomNonAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomNonAvailabilities to fetch.
     */
    orderBy?: RoomNonAvailabilityOrderByWithRelationInput | RoomNonAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomNonAvailabilities.
     */
    cursor?: RoomNonAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomNonAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomNonAvailabilities.
     */
    skip?: number
    distinct?: RoomNonAvailabilityScalarFieldEnum | RoomNonAvailabilityScalarFieldEnum[]
  }

  /**
   * RoomNonAvailability create
   */
  export type RoomNonAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNonAvailability
     */
    select?: RoomNonAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNonAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomNonAvailability.
     */
    data: XOR<RoomNonAvailabilityCreateInput, RoomNonAvailabilityUncheckedCreateInput>
  }

  /**
   * RoomNonAvailability createMany
   */
  export type RoomNonAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomNonAvailabilities.
     */
    data: RoomNonAvailabilityCreateManyInput | RoomNonAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomNonAvailability createManyAndReturn
   */
  export type RoomNonAvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNonAvailability
     */
    select?: RoomNonAvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RoomNonAvailabilities.
     */
    data: RoomNonAvailabilityCreateManyInput | RoomNonAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNonAvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomNonAvailability update
   */
  export type RoomNonAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNonAvailability
     */
    select?: RoomNonAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNonAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomNonAvailability.
     */
    data: XOR<RoomNonAvailabilityUpdateInput, RoomNonAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which RoomNonAvailability to update.
     */
    where: RoomNonAvailabilityWhereUniqueInput
  }

  /**
   * RoomNonAvailability updateMany
   */
  export type RoomNonAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomNonAvailabilities.
     */
    data: XOR<RoomNonAvailabilityUpdateManyMutationInput, RoomNonAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which RoomNonAvailabilities to update
     */
    where?: RoomNonAvailabilityWhereInput
  }

  /**
   * RoomNonAvailability upsert
   */
  export type RoomNonAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNonAvailability
     */
    select?: RoomNonAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNonAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomNonAvailability to update in case it exists.
     */
    where: RoomNonAvailabilityWhereUniqueInput
    /**
     * In case the RoomNonAvailability found by the `where` argument doesn't exist, create a new RoomNonAvailability with this data.
     */
    create: XOR<RoomNonAvailabilityCreateInput, RoomNonAvailabilityUncheckedCreateInput>
    /**
     * In case the RoomNonAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomNonAvailabilityUpdateInput, RoomNonAvailabilityUncheckedUpdateInput>
  }

  /**
   * RoomNonAvailability delete
   */
  export type RoomNonAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNonAvailability
     */
    select?: RoomNonAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNonAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which RoomNonAvailability to delete.
     */
    where: RoomNonAvailabilityWhereUniqueInput
  }

  /**
   * RoomNonAvailability deleteMany
   */
  export type RoomNonAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomNonAvailabilities to delete
     */
    where?: RoomNonAvailabilityWhereInput
  }

  /**
   * RoomNonAvailability without action
   */
  export type RoomNonAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNonAvailability
     */
    select?: RoomNonAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNonAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    totalPrice: number | null
    duration: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    userId: number | null
    totalPrice: number | null
    duration: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    userId: number | null
    status: $Enums.StatusPayment | null
    totalPrice: number | null
    duration: number | null
    paymentMethode: $Enums.PaymentMethode | null
    paymentProof: string | null
    invoiceUrl: string | null
    expiredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    userId: number | null
    status: $Enums.StatusPayment | null
    totalPrice: number | null
    duration: number | null
    paymentMethode: $Enums.PaymentMethode | null
    paymentProof: string | null
    invoiceUrl: string | null
    expiredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    uuid: number
    userId: number
    status: number
    totalPrice: number
    duration: number
    paymentMethode: number
    paymentProof: number
    invoiceUrl: number
    expiredAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    userId?: true
    totalPrice?: true
    duration?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    userId?: true
    totalPrice?: true
    duration?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    uuid?: true
    userId?: true
    status?: true
    totalPrice?: true
    duration?: true
    paymentMethode?: true
    paymentProof?: true
    invoiceUrl?: true
    expiredAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    uuid?: true
    userId?: true
    status?: true
    totalPrice?: true
    duration?: true
    paymentMethode?: true
    paymentProof?: true
    invoiceUrl?: true
    expiredAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    uuid?: true
    userId?: true
    status?: true
    totalPrice?: true
    duration?: true
    paymentMethode?: true
    paymentProof?: true
    invoiceUrl?: true
    expiredAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    uuid: string
    userId: number
    status: $Enums.StatusPayment
    totalPrice: number
    duration: number
    paymentMethode: $Enums.PaymentMethode
    paymentProof: string | null
    invoiceUrl: string | null
    expiredAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    userId?: boolean
    status?: boolean
    totalPrice?: boolean
    duration?: boolean
    paymentMethode?: boolean
    paymentProof?: boolean
    invoiceUrl?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    review?: boolean | Payment$reviewArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    reservation?: boolean | Payment$reservationArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    userId?: boolean
    status?: boolean
    totalPrice?: boolean
    duration?: boolean
    paymentMethode?: boolean
    paymentProof?: boolean
    invoiceUrl?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    uuid?: boolean
    userId?: boolean
    status?: boolean
    totalPrice?: boolean
    duration?: boolean
    paymentMethode?: boolean
    paymentProof?: boolean
    invoiceUrl?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | Payment$reviewArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    reservation?: boolean | Payment$reservationArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      reservation: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      userId: number
      status: $Enums.StatusPayment
      totalPrice: number
      duration: number
      paymentMethode: $Enums.PaymentMethode
      paymentProof: string | null
      invoiceUrl: string | null
      expiredAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends Payment$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Payment$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    reservation<T extends Payment$reservationArgs<ExtArgs> = {}>(args?: Subset<T, Payment$reservationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly uuid: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'Int'>
    readonly status: FieldRef<"Payment", 'StatusPayment'>
    readonly totalPrice: FieldRef<"Payment", 'Int'>
    readonly duration: FieldRef<"Payment", 'Int'>
    readonly paymentMethode: FieldRef<"Payment", 'PaymentMethode'>
    readonly paymentProof: FieldRef<"Payment", 'String'>
    readonly invoiceUrl: FieldRef<"Payment", 'String'>
    readonly expiredAt: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment.review
   */
  export type Payment$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Payment.reservation
   */
  export type Payment$reservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
    paymentId: number | null
    price: number | null
  }

  export type ReservationSumAggregateOutputType = {
    id: number | null
    roomId: number | null
    paymentId: number | null
    price: number | null
  }

  export type ReservationMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    roomId: number | null
    paymentId: number | null
    price: number | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    roomId: number | null
    paymentId: number | null
    price: number | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    uuid: number
    roomId: number
    paymentId: number
    price: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    id?: true
    roomId?: true
    paymentId?: true
    price?: true
  }

  export type ReservationSumAggregateInputType = {
    id?: true
    roomId?: true
    paymentId?: true
    price?: true
  }

  export type ReservationMinAggregateInputType = {
    id?: true
    uuid?: true
    roomId?: true
    paymentId?: true
    price?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    uuid?: true
    roomId?: true
    paymentId?: true
    price?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    uuid?: true
    roomId?: true
    paymentId?: true
    price?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id: number
    uuid: string
    roomId: number
    paymentId: number
    price: number
    startDate: Date
    endDate: Date
    createdAt: Date
    updatedAt: Date
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    roomId?: boolean
    paymentId?: boolean
    price?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    roomId?: boolean
    paymentId?: boolean
    price?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    id?: boolean
    uuid?: boolean
    roomId?: boolean
    paymentId?: boolean
    price?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      payment: Prisma.$PaymentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      roomId: number
      paymentId: number
      price: number
      startDate: Date
      endDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {ReservationCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reservation model
   */ 
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'Int'>
    readonly uuid: FieldRef<"Reservation", 'String'>
    readonly roomId: FieldRef<"Reservation", 'Int'>
    readonly paymentId: FieldRef<"Reservation", 'Int'>
    readonly price: FieldRef<"Reservation", 'Int'>
    readonly startDate: FieldRef<"Reservation", 'DateTime'>
    readonly endDate: FieldRef<"Reservation", 'DateTime'>
    readonly createdAt: FieldRef<"Reservation", 'DateTime'>
    readonly updatedAt: FieldRef<"Reservation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservation createManyAndReturn
   */
  export type ReservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
    paymentId: number | null
    propertyId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
    paymentId: number | null
    propertyId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    rating: number | null
    review: string | null
    userId: number | null
    paymentId: number | null
    propertyId: number | null
    replyMessage: string | null
    replyDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    rating: number | null
    review: string | null
    userId: number | null
    paymentId: number | null
    propertyId: number | null
    replyMessage: string | null
    replyDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    review: number
    userId: number
    paymentId: number
    propertyId: number
    replyMessage: number
    replyDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    paymentId?: true
    propertyId?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    paymentId?: true
    propertyId?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    review?: true
    userId?: true
    paymentId?: true
    propertyId?: true
    replyMessage?: true
    replyDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    review?: true
    userId?: true
    paymentId?: true
    propertyId?: true
    replyMessage?: true
    replyDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    review?: true
    userId?: true
    paymentId?: true
    propertyId?: true
    replyMessage?: true
    replyDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    rating: number
    review: string
    userId: number
    paymentId: number
    propertyId: number
    replyMessage: string | null
    replyDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    review?: boolean
    userId?: boolean
    paymentId?: boolean
    propertyId?: boolean
    replyMessage?: boolean
    replyDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    review?: boolean
    userId?: boolean
    paymentId?: boolean
    propertyId?: boolean
    replyMessage?: boolean
    replyDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    review?: boolean
    userId?: boolean
    paymentId?: boolean
    propertyId?: boolean
    replyMessage?: boolean
    replyDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      property: Prisma.$PropertyPayload<ExtArgs>
      payment: Prisma.$PaymentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rating: number
      review: string
      userId: number
      paymentId: number
      propertyId: number
      replyMessage: string | null
      replyDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly review: FieldRef<"Review", 'String'>
    readonly userId: FieldRef<"Review", 'Int'>
    readonly paymentId: FieldRef<"Review", 'Int'>
    readonly propertyId: FieldRef<"Review", 'Int'>
    readonly replyMessage: FieldRef<"Review", 'String'>
    readonly replyDate: FieldRef<"Review", 'DateTime'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SampleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SampleScalarFieldEnum = (typeof SampleScalarFieldEnum)[keyof typeof SampleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    imageUrl: 'imageUrl',
    token: 'token',
    role: 'role',
    provider: 'provider',
    isVerified: 'isVerified',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imageUrl: 'imageUrl',
    phoneNumber: 'phoneNumber',
    bankName: 'bankName',
    bankNumber: 'bankNumber',
    userId: 'userId',
    balance: 'balance',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    description: 'description',
    latitude: 'latitude',
    longitude: 'longitude',
    status: 'status',
    isDeleted: 'isDeleted',
    tenantId: 'tenantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    location: 'location',
    propertyCategoryId: 'propertyCategoryId'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const PropertyCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    tenantId: 'tenantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyCategoryScalarFieldEnum = (typeof PropertyCategoryScalarFieldEnum)[keyof typeof PropertyCategoryScalarFieldEnum]


  export const PropertyImageScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    isDeleted: 'isDeleted',
    propertyId: 'propertyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyImageScalarFieldEnum = (typeof PropertyImageScalarFieldEnum)[keyof typeof PropertyImageScalarFieldEnum]


  export const PropertyFacilityScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    isDeleted: 'isDeleted',
    propertyId: 'propertyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyFacilityScalarFieldEnum = (typeof PropertyFacilityScalarFieldEnum)[keyof typeof PropertyFacilityScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    type: 'type',
    stock: 'stock',
    price: 'price',
    guest: 'guest',
    isDeleted: 'isDeleted',
    propertyId: 'propertyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const PeakSeasonRateScalarFieldEnum: {
    id: 'id',
    price: 'price',
    startDate: 'startDate',
    endDate: 'endDate',
    isDeleted: 'isDeleted',
    roomId: 'roomId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PeakSeasonRateScalarFieldEnum = (typeof PeakSeasonRateScalarFieldEnum)[keyof typeof PeakSeasonRateScalarFieldEnum]


  export const RoomFacilityScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    isDeleted: 'isDeleted',
    roomId: 'roomId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomFacilityScalarFieldEnum = (typeof RoomFacilityScalarFieldEnum)[keyof typeof RoomFacilityScalarFieldEnum]


  export const RoomImageScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    isDeleted: 'isDeleted',
    roomId: 'roomId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomImageScalarFieldEnum = (typeof RoomImageScalarFieldEnum)[keyof typeof RoomImageScalarFieldEnum]


  export const RoomNonAvailabilityScalarFieldEnum: {
    id: 'id',
    startDate: 'startDate',
    endDate: 'endDate',
    isDeleted: 'isDeleted',
    reason: 'reason',
    roomId: 'roomId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomNonAvailabilityScalarFieldEnum = (typeof RoomNonAvailabilityScalarFieldEnum)[keyof typeof RoomNonAvailabilityScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    userId: 'userId',
    status: 'status',
    totalPrice: 'totalPrice',
    duration: 'duration',
    paymentMethode: 'paymentMethode',
    paymentProof: 'paymentProof',
    invoiceUrl: 'invoiceUrl',
    expiredAt: 'expiredAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    roomId: 'roomId',
    paymentId: 'paymentId',
    price: 'price',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    review: 'review',
    userId: 'userId',
    paymentId: 'paymentId',
    propertyId: 'propertyId',
    replyMessage: 'replyMessage',
    replyDate: 'replyDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Provider'
   */
  export type EnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider'>
    


  /**
   * Reference to a field of type 'Provider[]'
   */
  export type ListEnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'StatusProperty'
   */
  export type EnumStatusPropertyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusProperty'>
    


  /**
   * Reference to a field of type 'StatusProperty[]'
   */
  export type ListEnumStatusPropertyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusProperty[]'>
    


  /**
   * Reference to a field of type 'Type'
   */
  export type EnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type'>
    


  /**
   * Reference to a field of type 'Type[]'
   */
  export type ListEnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type[]'>
    


  /**
   * Reference to a field of type 'StatusPayment'
   */
  export type EnumStatusPaymentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPayment'>
    


  /**
   * Reference to a field of type 'StatusPayment[]'
   */
  export type ListEnumStatusPaymentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPayment[]'>
    


  /**
   * Reference to a field of type 'PaymentMethode'
   */
  export type EnumPaymentMethodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethode'>
    


  /**
   * Reference to a field of type 'PaymentMethode[]'
   */
  export type ListEnumPaymentMethodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethode[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SampleWhereInput = {
    AND?: SampleWhereInput | SampleWhereInput[]
    OR?: SampleWhereInput[]
    NOT?: SampleWhereInput | SampleWhereInput[]
    id?: IntFilter<"Sample"> | number
    name?: StringFilter<"Sample"> | string
    createdAt?: DateTimeFilter<"Sample"> | Date | string
    updatedAt?: DateTimeFilter<"Sample"> | Date | string
  }

  export type SampleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SampleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SampleWhereInput | SampleWhereInput[]
    OR?: SampleWhereInput[]
    NOT?: SampleWhereInput | SampleWhereInput[]
    name?: StringFilter<"Sample"> | string
    createdAt?: DateTimeFilter<"Sample"> | Date | string
    updatedAt?: DateTimeFilter<"Sample"> | Date | string
  }, "id">

  export type SampleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SampleCountOrderByAggregateInput
    _avg?: SampleAvgOrderByAggregateInput
    _max?: SampleMaxOrderByAggregateInput
    _min?: SampleMinOrderByAggregateInput
    _sum?: SampleSumOrderByAggregateInput
  }

  export type SampleScalarWhereWithAggregatesInput = {
    AND?: SampleScalarWhereWithAggregatesInput | SampleScalarWhereWithAggregatesInput[]
    OR?: SampleScalarWhereWithAggregatesInput[]
    NOT?: SampleScalarWhereWithAggregatesInput | SampleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sample"> | number
    name?: StringWithAggregatesFilter<"Sample"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Sample"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sample"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    token?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    provider?: EnumProviderFilter<"User"> | $Enums.Provider
    isVerified?: BoolFilter<"User"> | boolean
    isDeleted?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    review?: ReviewListRelationFilter
    payment?: PaymentListRelationFilter
    Tenant?: TenantListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    role?: SortOrder
    provider?: SortOrder
    isVerified?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    review?: ReviewOrderByRelationAggregateInput
    payment?: PaymentOrderByRelationAggregateInput
    Tenant?: TenantOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    token?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    provider?: EnumProviderFilter<"User"> | $Enums.Provider
    isVerified?: BoolFilter<"User"> | boolean
    isDeleted?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    review?: ReviewListRelationFilter
    payment?: PaymentListRelationFilter
    Tenant?: TenantListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    role?: SortOrder
    provider?: SortOrder
    isVerified?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    token?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    provider?: EnumProviderWithAggregatesFilter<"User"> | $Enums.Provider
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: IntFilter<"Tenant"> | number
    name?: StringFilter<"Tenant"> | string
    imageUrl?: StringNullableFilter<"Tenant"> | string | null
    phoneNumber?: StringNullableFilter<"Tenant"> | string | null
    bankName?: StringFilter<"Tenant"> | string
    bankNumber?: StringFilter<"Tenant"> | string
    userId?: IntFilter<"Tenant"> | number
    balance?: IntFilter<"Tenant"> | number
    isDeleted?: BoolFilter<"Tenant"> | boolean
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    property?: PropertyListRelationFilter
    PropertyCategory?: PropertyCategoryListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    bankName?: SortOrder
    bankNumber?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    property?: PropertyOrderByRelationAggregateInput
    PropertyCategory?: PropertyCategoryOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    imageUrl?: StringNullableFilter<"Tenant"> | string | null
    phoneNumber?: StringNullableFilter<"Tenant"> | string | null
    bankName?: StringFilter<"Tenant"> | string
    bankNumber?: StringFilter<"Tenant"> | string
    userId?: IntFilter<"Tenant"> | number
    balance?: IntFilter<"Tenant"> | number
    isDeleted?: BoolFilter<"Tenant"> | boolean
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    property?: PropertyListRelationFilter
    PropertyCategory?: PropertyCategoryListRelationFilter
  }, "id">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    bankName?: SortOrder
    bankNumber?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _avg?: TenantAvgOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
    _sum?: TenantSumOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tenant"> | number
    name?: StringWithAggregatesFilter<"Tenant"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    bankName?: StringWithAggregatesFilter<"Tenant"> | string
    bankNumber?: StringWithAggregatesFilter<"Tenant"> | string
    userId?: IntWithAggregatesFilter<"Tenant"> | number
    balance?: IntWithAggregatesFilter<"Tenant"> | number
    isDeleted?: BoolWithAggregatesFilter<"Tenant"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: IntFilter<"Property"> | number
    slug?: StringFilter<"Property"> | string
    title?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    latitude?: StringFilter<"Property"> | string
    longitude?: StringFilter<"Property"> | string
    status?: EnumStatusPropertyFilter<"Property"> | $Enums.StatusProperty
    isDeleted?: BoolFilter<"Property"> | boolean
    tenantId?: IntFilter<"Property"> | number
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    location?: StringFilter<"Property"> | string
    propertyCategoryId?: IntFilter<"Property"> | number
    propertyImage?: PropertyImageListRelationFilter
    propertyFacility?: PropertyFacilityListRelationFilter
    room?: RoomListRelationFilter
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    review?: ReviewListRelationFilter
    propertyCategory?: XOR<PropertyCategoryScalarRelationFilter, PropertyCategoryWhereInput>
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    isDeleted?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrder
    propertyCategoryId?: SortOrder
    propertyImage?: PropertyImageOrderByRelationAggregateInput
    propertyFacility?: PropertyFacilityOrderByRelationAggregateInput
    room?: RoomOrderByRelationAggregateInput
    tenant?: TenantOrderByWithRelationInput
    review?: ReviewOrderByRelationAggregateInput
    propertyCategory?: PropertyCategoryOrderByWithRelationInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    title?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    latitude?: StringFilter<"Property"> | string
    longitude?: StringFilter<"Property"> | string
    status?: EnumStatusPropertyFilter<"Property"> | $Enums.StatusProperty
    isDeleted?: BoolFilter<"Property"> | boolean
    tenantId?: IntFilter<"Property"> | number
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    location?: StringFilter<"Property"> | string
    propertyCategoryId?: IntFilter<"Property"> | number
    propertyImage?: PropertyImageListRelationFilter
    propertyFacility?: PropertyFacilityListRelationFilter
    room?: RoomListRelationFilter
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    review?: ReviewListRelationFilter
    propertyCategory?: XOR<PropertyCategoryScalarRelationFilter, PropertyCategoryWhereInput>
  }, "id" | "slug">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    isDeleted?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrder
    propertyCategoryId?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Property"> | number
    slug?: StringWithAggregatesFilter<"Property"> | string
    title?: StringWithAggregatesFilter<"Property"> | string
    description?: StringWithAggregatesFilter<"Property"> | string
    latitude?: StringWithAggregatesFilter<"Property"> | string
    longitude?: StringWithAggregatesFilter<"Property"> | string
    status?: EnumStatusPropertyWithAggregatesFilter<"Property"> | $Enums.StatusProperty
    isDeleted?: BoolWithAggregatesFilter<"Property"> | boolean
    tenantId?: IntWithAggregatesFilter<"Property"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    location?: StringWithAggregatesFilter<"Property"> | string
    propertyCategoryId?: IntWithAggregatesFilter<"Property"> | number
  }

  export type PropertyCategoryWhereInput = {
    AND?: PropertyCategoryWhereInput | PropertyCategoryWhereInput[]
    OR?: PropertyCategoryWhereInput[]
    NOT?: PropertyCategoryWhereInput | PropertyCategoryWhereInput[]
    id?: IntFilter<"PropertyCategory"> | number
    name?: StringFilter<"PropertyCategory"> | string
    tenantId?: IntFilter<"PropertyCategory"> | number
    createdAt?: DateTimeFilter<"PropertyCategory"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyCategory"> | Date | string
    properties?: PropertyListRelationFilter
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type PropertyCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    properties?: PropertyOrderByRelationAggregateInput
    tenant?: TenantOrderByWithRelationInput
  }

  export type PropertyCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PropertyCategoryWhereInput | PropertyCategoryWhereInput[]
    OR?: PropertyCategoryWhereInput[]
    NOT?: PropertyCategoryWhereInput | PropertyCategoryWhereInput[]
    tenantId?: IntFilter<"PropertyCategory"> | number
    createdAt?: DateTimeFilter<"PropertyCategory"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyCategory"> | Date | string
    properties?: PropertyListRelationFilter
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id" | "name">

  export type PropertyCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyCategoryCountOrderByAggregateInput
    _avg?: PropertyCategoryAvgOrderByAggregateInput
    _max?: PropertyCategoryMaxOrderByAggregateInput
    _min?: PropertyCategoryMinOrderByAggregateInput
    _sum?: PropertyCategorySumOrderByAggregateInput
  }

  export type PropertyCategoryScalarWhereWithAggregatesInput = {
    AND?: PropertyCategoryScalarWhereWithAggregatesInput | PropertyCategoryScalarWhereWithAggregatesInput[]
    OR?: PropertyCategoryScalarWhereWithAggregatesInput[]
    NOT?: PropertyCategoryScalarWhereWithAggregatesInput | PropertyCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropertyCategory"> | number
    name?: StringWithAggregatesFilter<"PropertyCategory"> | string
    tenantId?: IntWithAggregatesFilter<"PropertyCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PropertyCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PropertyCategory"> | Date | string
  }

  export type PropertyImageWhereInput = {
    AND?: PropertyImageWhereInput | PropertyImageWhereInput[]
    OR?: PropertyImageWhereInput[]
    NOT?: PropertyImageWhereInput | PropertyImageWhereInput[]
    id?: IntFilter<"PropertyImage"> | number
    imageUrl?: StringNullableFilter<"PropertyImage"> | string | null
    isDeleted?: BoolFilter<"PropertyImage"> | boolean
    propertyId?: IntFilter<"PropertyImage"> | number
    createdAt?: DateTimeFilter<"PropertyImage"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyImage"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type PropertyImageOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
  }

  export type PropertyImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyImageWhereInput | PropertyImageWhereInput[]
    OR?: PropertyImageWhereInput[]
    NOT?: PropertyImageWhereInput | PropertyImageWhereInput[]
    imageUrl?: StringNullableFilter<"PropertyImage"> | string | null
    isDeleted?: BoolFilter<"PropertyImage"> | boolean
    propertyId?: IntFilter<"PropertyImage"> | number
    createdAt?: DateTimeFilter<"PropertyImage"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyImage"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type PropertyImageOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyImageCountOrderByAggregateInput
    _avg?: PropertyImageAvgOrderByAggregateInput
    _max?: PropertyImageMaxOrderByAggregateInput
    _min?: PropertyImageMinOrderByAggregateInput
    _sum?: PropertyImageSumOrderByAggregateInput
  }

  export type PropertyImageScalarWhereWithAggregatesInput = {
    AND?: PropertyImageScalarWhereWithAggregatesInput | PropertyImageScalarWhereWithAggregatesInput[]
    OR?: PropertyImageScalarWhereWithAggregatesInput[]
    NOT?: PropertyImageScalarWhereWithAggregatesInput | PropertyImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropertyImage"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"PropertyImage"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"PropertyImage"> | boolean
    propertyId?: IntWithAggregatesFilter<"PropertyImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PropertyImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PropertyImage"> | Date | string
  }

  export type PropertyFacilityWhereInput = {
    AND?: PropertyFacilityWhereInput | PropertyFacilityWhereInput[]
    OR?: PropertyFacilityWhereInput[]
    NOT?: PropertyFacilityWhereInput | PropertyFacilityWhereInput[]
    id?: IntFilter<"PropertyFacility"> | number
    title?: StringFilter<"PropertyFacility"> | string
    description?: StringFilter<"PropertyFacility"> | string
    isDeleted?: BoolFilter<"PropertyFacility"> | boolean
    propertyId?: IntFilter<"PropertyFacility"> | number
    createdAt?: DateTimeFilter<"PropertyFacility"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyFacility"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type PropertyFacilityOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isDeleted?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
  }

  export type PropertyFacilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyFacilityWhereInput | PropertyFacilityWhereInput[]
    OR?: PropertyFacilityWhereInput[]
    NOT?: PropertyFacilityWhereInput | PropertyFacilityWhereInput[]
    title?: StringFilter<"PropertyFacility"> | string
    description?: StringFilter<"PropertyFacility"> | string
    isDeleted?: BoolFilter<"PropertyFacility"> | boolean
    propertyId?: IntFilter<"PropertyFacility"> | number
    createdAt?: DateTimeFilter<"PropertyFacility"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyFacility"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type PropertyFacilityOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isDeleted?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyFacilityCountOrderByAggregateInput
    _avg?: PropertyFacilityAvgOrderByAggregateInput
    _max?: PropertyFacilityMaxOrderByAggregateInput
    _min?: PropertyFacilityMinOrderByAggregateInput
    _sum?: PropertyFacilitySumOrderByAggregateInput
  }

  export type PropertyFacilityScalarWhereWithAggregatesInput = {
    AND?: PropertyFacilityScalarWhereWithAggregatesInput | PropertyFacilityScalarWhereWithAggregatesInput[]
    OR?: PropertyFacilityScalarWhereWithAggregatesInput[]
    NOT?: PropertyFacilityScalarWhereWithAggregatesInput | PropertyFacilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropertyFacility"> | number
    title?: StringWithAggregatesFilter<"PropertyFacility"> | string
    description?: StringWithAggregatesFilter<"PropertyFacility"> | string
    isDeleted?: BoolWithAggregatesFilter<"PropertyFacility"> | boolean
    propertyId?: IntWithAggregatesFilter<"PropertyFacility"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PropertyFacility"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PropertyFacility"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: IntFilter<"Room"> | number
    type?: EnumTypeFilter<"Room"> | $Enums.Type
    stock?: IntFilter<"Room"> | number
    price?: IntFilter<"Room"> | number
    guest?: IntFilter<"Room"> | number
    isDeleted?: BoolFilter<"Room"> | boolean
    propertyId?: IntFilter<"Room"> | number
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    peakSeasonRate?: PeakSeasonRateListRelationFilter
    roomFacility?: RoomFacilityListRelationFilter
    roomImage?: RoomImageListRelationFilter
    roomNonAvailability?: RoomNonAvailabilityListRelationFilter
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    reservation?: ReservationListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    guest?: SortOrder
    isDeleted?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    peakSeasonRate?: PeakSeasonRateOrderByRelationAggregateInput
    roomFacility?: RoomFacilityOrderByRelationAggregateInput
    roomImage?: RoomImageOrderByRelationAggregateInput
    roomNonAvailability?: RoomNonAvailabilityOrderByRelationAggregateInput
    property?: PropertyOrderByWithRelationInput
    reservation?: ReservationOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    type?: EnumTypeFilter<"Room"> | $Enums.Type
    stock?: IntFilter<"Room"> | number
    price?: IntFilter<"Room"> | number
    guest?: IntFilter<"Room"> | number
    isDeleted?: BoolFilter<"Room"> | boolean
    propertyId?: IntFilter<"Room"> | number
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    peakSeasonRate?: PeakSeasonRateListRelationFilter
    roomFacility?: RoomFacilityListRelationFilter
    roomImage?: RoomImageListRelationFilter
    roomNonAvailability?: RoomNonAvailabilityListRelationFilter
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    reservation?: ReservationListRelationFilter
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    guest?: SortOrder
    isDeleted?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Room"> | number
    type?: EnumTypeWithAggregatesFilter<"Room"> | $Enums.Type
    stock?: IntWithAggregatesFilter<"Room"> | number
    price?: IntWithAggregatesFilter<"Room"> | number
    guest?: IntWithAggregatesFilter<"Room"> | number
    isDeleted?: BoolWithAggregatesFilter<"Room"> | boolean
    propertyId?: IntWithAggregatesFilter<"Room"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type PeakSeasonRateWhereInput = {
    AND?: PeakSeasonRateWhereInput | PeakSeasonRateWhereInput[]
    OR?: PeakSeasonRateWhereInput[]
    NOT?: PeakSeasonRateWhereInput | PeakSeasonRateWhereInput[]
    id?: IntFilter<"PeakSeasonRate"> | number
    price?: IntFilter<"PeakSeasonRate"> | number
    startDate?: DateTimeFilter<"PeakSeasonRate"> | Date | string
    endDate?: DateTimeFilter<"PeakSeasonRate"> | Date | string
    isDeleted?: BoolFilter<"PeakSeasonRate"> | boolean
    roomId?: IntFilter<"PeakSeasonRate"> | number
    createdAt?: DateTimeFilter<"PeakSeasonRate"> | Date | string
    updatedAt?: DateTimeFilter<"PeakSeasonRate"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type PeakSeasonRateOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isDeleted?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    room?: RoomOrderByWithRelationInput
  }

  export type PeakSeasonRateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PeakSeasonRateWhereInput | PeakSeasonRateWhereInput[]
    OR?: PeakSeasonRateWhereInput[]
    NOT?: PeakSeasonRateWhereInput | PeakSeasonRateWhereInput[]
    price?: IntFilter<"PeakSeasonRate"> | number
    startDate?: DateTimeFilter<"PeakSeasonRate"> | Date | string
    endDate?: DateTimeFilter<"PeakSeasonRate"> | Date | string
    isDeleted?: BoolFilter<"PeakSeasonRate"> | boolean
    roomId?: IntFilter<"PeakSeasonRate"> | number
    createdAt?: DateTimeFilter<"PeakSeasonRate"> | Date | string
    updatedAt?: DateTimeFilter<"PeakSeasonRate"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id">

  export type PeakSeasonRateOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isDeleted?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PeakSeasonRateCountOrderByAggregateInput
    _avg?: PeakSeasonRateAvgOrderByAggregateInput
    _max?: PeakSeasonRateMaxOrderByAggregateInput
    _min?: PeakSeasonRateMinOrderByAggregateInput
    _sum?: PeakSeasonRateSumOrderByAggregateInput
  }

  export type PeakSeasonRateScalarWhereWithAggregatesInput = {
    AND?: PeakSeasonRateScalarWhereWithAggregatesInput | PeakSeasonRateScalarWhereWithAggregatesInput[]
    OR?: PeakSeasonRateScalarWhereWithAggregatesInput[]
    NOT?: PeakSeasonRateScalarWhereWithAggregatesInput | PeakSeasonRateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PeakSeasonRate"> | number
    price?: IntWithAggregatesFilter<"PeakSeasonRate"> | number
    startDate?: DateTimeWithAggregatesFilter<"PeakSeasonRate"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"PeakSeasonRate"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"PeakSeasonRate"> | boolean
    roomId?: IntWithAggregatesFilter<"PeakSeasonRate"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PeakSeasonRate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PeakSeasonRate"> | Date | string
  }

  export type RoomFacilityWhereInput = {
    AND?: RoomFacilityWhereInput | RoomFacilityWhereInput[]
    OR?: RoomFacilityWhereInput[]
    NOT?: RoomFacilityWhereInput | RoomFacilityWhereInput[]
    id?: IntFilter<"RoomFacility"> | number
    title?: StringFilter<"RoomFacility"> | string
    description?: StringFilter<"RoomFacility"> | string
    isDeleted?: BoolFilter<"RoomFacility"> | boolean
    roomId?: IntFilter<"RoomFacility"> | number
    createdAt?: DateTimeFilter<"RoomFacility"> | Date | string
    updatedAt?: DateTimeFilter<"RoomFacility"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type RoomFacilityOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isDeleted?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    room?: RoomOrderByWithRelationInput
  }

  export type RoomFacilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomFacilityWhereInput | RoomFacilityWhereInput[]
    OR?: RoomFacilityWhereInput[]
    NOT?: RoomFacilityWhereInput | RoomFacilityWhereInput[]
    title?: StringFilter<"RoomFacility"> | string
    description?: StringFilter<"RoomFacility"> | string
    isDeleted?: BoolFilter<"RoomFacility"> | boolean
    roomId?: IntFilter<"RoomFacility"> | number
    createdAt?: DateTimeFilter<"RoomFacility"> | Date | string
    updatedAt?: DateTimeFilter<"RoomFacility"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id">

  export type RoomFacilityOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isDeleted?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomFacilityCountOrderByAggregateInput
    _avg?: RoomFacilityAvgOrderByAggregateInput
    _max?: RoomFacilityMaxOrderByAggregateInput
    _min?: RoomFacilityMinOrderByAggregateInput
    _sum?: RoomFacilitySumOrderByAggregateInput
  }

  export type RoomFacilityScalarWhereWithAggregatesInput = {
    AND?: RoomFacilityScalarWhereWithAggregatesInput | RoomFacilityScalarWhereWithAggregatesInput[]
    OR?: RoomFacilityScalarWhereWithAggregatesInput[]
    NOT?: RoomFacilityScalarWhereWithAggregatesInput | RoomFacilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoomFacility"> | number
    title?: StringWithAggregatesFilter<"RoomFacility"> | string
    description?: StringWithAggregatesFilter<"RoomFacility"> | string
    isDeleted?: BoolWithAggregatesFilter<"RoomFacility"> | boolean
    roomId?: IntWithAggregatesFilter<"RoomFacility"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RoomFacility"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RoomFacility"> | Date | string
  }

  export type RoomImageWhereInput = {
    AND?: RoomImageWhereInput | RoomImageWhereInput[]
    OR?: RoomImageWhereInput[]
    NOT?: RoomImageWhereInput | RoomImageWhereInput[]
    id?: IntFilter<"RoomImage"> | number
    imageUrl?: StringNullableFilter<"RoomImage"> | string | null
    isDeleted?: BoolFilter<"RoomImage"> | boolean
    roomId?: IntFilter<"RoomImage"> | number
    createdAt?: DateTimeFilter<"RoomImage"> | Date | string
    updatedAt?: DateTimeFilter<"RoomImage"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type RoomImageOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    room?: RoomOrderByWithRelationInput
  }

  export type RoomImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomImageWhereInput | RoomImageWhereInput[]
    OR?: RoomImageWhereInput[]
    NOT?: RoomImageWhereInput | RoomImageWhereInput[]
    imageUrl?: StringNullableFilter<"RoomImage"> | string | null
    isDeleted?: BoolFilter<"RoomImage"> | boolean
    roomId?: IntFilter<"RoomImage"> | number
    createdAt?: DateTimeFilter<"RoomImage"> | Date | string
    updatedAt?: DateTimeFilter<"RoomImage"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id">

  export type RoomImageOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomImageCountOrderByAggregateInput
    _avg?: RoomImageAvgOrderByAggregateInput
    _max?: RoomImageMaxOrderByAggregateInput
    _min?: RoomImageMinOrderByAggregateInput
    _sum?: RoomImageSumOrderByAggregateInput
  }

  export type RoomImageScalarWhereWithAggregatesInput = {
    AND?: RoomImageScalarWhereWithAggregatesInput | RoomImageScalarWhereWithAggregatesInput[]
    OR?: RoomImageScalarWhereWithAggregatesInput[]
    NOT?: RoomImageScalarWhereWithAggregatesInput | RoomImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoomImage"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"RoomImage"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"RoomImage"> | boolean
    roomId?: IntWithAggregatesFilter<"RoomImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RoomImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RoomImage"> | Date | string
  }

  export type RoomNonAvailabilityWhereInput = {
    AND?: RoomNonAvailabilityWhereInput | RoomNonAvailabilityWhereInput[]
    OR?: RoomNonAvailabilityWhereInput[]
    NOT?: RoomNonAvailabilityWhereInput | RoomNonAvailabilityWhereInput[]
    id?: IntFilter<"RoomNonAvailability"> | number
    startDate?: DateTimeFilter<"RoomNonAvailability"> | Date | string
    endDate?: DateTimeFilter<"RoomNonAvailability"> | Date | string
    isDeleted?: BoolFilter<"RoomNonAvailability"> | boolean
    reason?: StringNullableFilter<"RoomNonAvailability"> | string | null
    roomId?: IntFilter<"RoomNonAvailability"> | number
    createdAt?: DateTimeFilter<"RoomNonAvailability"> | Date | string
    updatedAt?: DateTimeFilter<"RoomNonAvailability"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type RoomNonAvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isDeleted?: SortOrder
    reason?: SortOrderInput | SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    room?: RoomOrderByWithRelationInput
  }

  export type RoomNonAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomNonAvailabilityWhereInput | RoomNonAvailabilityWhereInput[]
    OR?: RoomNonAvailabilityWhereInput[]
    NOT?: RoomNonAvailabilityWhereInput | RoomNonAvailabilityWhereInput[]
    startDate?: DateTimeFilter<"RoomNonAvailability"> | Date | string
    endDate?: DateTimeFilter<"RoomNonAvailability"> | Date | string
    isDeleted?: BoolFilter<"RoomNonAvailability"> | boolean
    reason?: StringNullableFilter<"RoomNonAvailability"> | string | null
    roomId?: IntFilter<"RoomNonAvailability"> | number
    createdAt?: DateTimeFilter<"RoomNonAvailability"> | Date | string
    updatedAt?: DateTimeFilter<"RoomNonAvailability"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id">

  export type RoomNonAvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isDeleted?: SortOrder
    reason?: SortOrderInput | SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomNonAvailabilityCountOrderByAggregateInput
    _avg?: RoomNonAvailabilityAvgOrderByAggregateInput
    _max?: RoomNonAvailabilityMaxOrderByAggregateInput
    _min?: RoomNonAvailabilityMinOrderByAggregateInput
    _sum?: RoomNonAvailabilitySumOrderByAggregateInput
  }

  export type RoomNonAvailabilityScalarWhereWithAggregatesInput = {
    AND?: RoomNonAvailabilityScalarWhereWithAggregatesInput | RoomNonAvailabilityScalarWhereWithAggregatesInput[]
    OR?: RoomNonAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: RoomNonAvailabilityScalarWhereWithAggregatesInput | RoomNonAvailabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoomNonAvailability"> | number
    startDate?: DateTimeWithAggregatesFilter<"RoomNonAvailability"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"RoomNonAvailability"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"RoomNonAvailability"> | boolean
    reason?: StringNullableWithAggregatesFilter<"RoomNonAvailability"> | string | null
    roomId?: IntWithAggregatesFilter<"RoomNonAvailability"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RoomNonAvailability"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RoomNonAvailability"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    uuid?: StringFilter<"Payment"> | string
    userId?: IntFilter<"Payment"> | number
    status?: EnumStatusPaymentFilter<"Payment"> | $Enums.StatusPayment
    totalPrice?: IntFilter<"Payment"> | number
    duration?: IntFilter<"Payment"> | number
    paymentMethode?: EnumPaymentMethodeFilter<"Payment"> | $Enums.PaymentMethode
    paymentProof?: StringNullableFilter<"Payment"> | string | null
    invoiceUrl?: StringNullableFilter<"Payment"> | string | null
    expiredAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    review?: ReviewListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reservation?: ReservationListRelationFilter
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    duration?: SortOrder
    paymentMethode?: SortOrder
    paymentProof?: SortOrderInput | SortOrder
    invoiceUrl?: SortOrderInput | SortOrder
    expiredAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    review?: ReviewOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    reservation?: ReservationOrderByRelationAggregateInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    uuid?: StringFilter<"Payment"> | string
    userId?: IntFilter<"Payment"> | number
    status?: EnumStatusPaymentFilter<"Payment"> | $Enums.StatusPayment
    totalPrice?: IntFilter<"Payment"> | number
    duration?: IntFilter<"Payment"> | number
    paymentMethode?: EnumPaymentMethodeFilter<"Payment"> | $Enums.PaymentMethode
    paymentProof?: StringNullableFilter<"Payment"> | string | null
    invoiceUrl?: StringNullableFilter<"Payment"> | string | null
    expiredAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    review?: ReviewListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reservation?: ReservationListRelationFilter
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    duration?: SortOrder
    paymentMethode?: SortOrder
    paymentProof?: SortOrderInput | SortOrder
    invoiceUrl?: SortOrderInput | SortOrder
    expiredAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    uuid?: StringWithAggregatesFilter<"Payment"> | string
    userId?: IntWithAggregatesFilter<"Payment"> | number
    status?: EnumStatusPaymentWithAggregatesFilter<"Payment"> | $Enums.StatusPayment
    totalPrice?: IntWithAggregatesFilter<"Payment"> | number
    duration?: IntWithAggregatesFilter<"Payment"> | number
    paymentMethode?: EnumPaymentMethodeWithAggregatesFilter<"Payment"> | $Enums.PaymentMethode
    paymentProof?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    invoiceUrl?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    expiredAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: IntFilter<"Reservation"> | number
    uuid?: StringFilter<"Reservation"> | string
    roomId?: IntFilter<"Reservation"> | number
    paymentId?: IntFilter<"Reservation"> | number
    price?: IntFilter<"Reservation"> | number
    startDate?: DateTimeFilter<"Reservation"> | Date | string
    endDate?: DateTimeFilter<"Reservation"> | Date | string
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    roomId?: SortOrder
    paymentId?: SortOrder
    price?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    room?: RoomOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    uuid?: StringFilter<"Reservation"> | string
    roomId?: IntFilter<"Reservation"> | number
    paymentId?: IntFilter<"Reservation"> | number
    price?: IntFilter<"Reservation"> | number
    startDate?: DateTimeFilter<"Reservation"> | Date | string
    endDate?: DateTimeFilter<"Reservation"> | Date | string
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
  }, "id">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    roomId?: SortOrder
    paymentId?: SortOrder
    price?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _avg?: ReservationAvgOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
    _sum?: ReservationSumOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reservation"> | number
    uuid?: StringWithAggregatesFilter<"Reservation"> | string
    roomId?: IntWithAggregatesFilter<"Reservation"> | number
    paymentId?: IntWithAggregatesFilter<"Reservation"> | number
    price?: IntWithAggregatesFilter<"Reservation"> | number
    startDate?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    review?: StringFilter<"Review"> | string
    userId?: IntFilter<"Review"> | number
    paymentId?: IntFilter<"Review"> | number
    propertyId?: IntFilter<"Review"> | number
    replyMessage?: StringNullableFilter<"Review"> | string | null
    replyDate?: DateTimeNullableFilter<"Review"> | Date | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    userId?: SortOrder
    paymentId?: SortOrder
    propertyId?: SortOrder
    replyMessage?: SortOrderInput | SortOrder
    replyDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    property?: PropertyOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntFilter<"Review"> | number
    review?: StringFilter<"Review"> | string
    userId?: IntFilter<"Review"> | number
    paymentId?: IntFilter<"Review"> | number
    propertyId?: IntFilter<"Review"> | number
    replyMessage?: StringNullableFilter<"Review"> | string | null
    replyDate?: DateTimeNullableFilter<"Review"> | Date | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    userId?: SortOrder
    paymentId?: SortOrder
    propertyId?: SortOrder
    replyMessage?: SortOrderInput | SortOrder
    replyDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    rating?: IntWithAggregatesFilter<"Review"> | number
    review?: StringWithAggregatesFilter<"Review"> | string
    userId?: IntWithAggregatesFilter<"Review"> | number
    paymentId?: IntWithAggregatesFilter<"Review"> | number
    propertyId?: IntWithAggregatesFilter<"Review"> | number
    replyMessage?: StringNullableWithAggregatesFilter<"Review"> | string | null
    replyDate?: DateTimeNullableWithAggregatesFilter<"Review"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type SampleCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SampleUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SampleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SampleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SampleCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SampleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SampleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password?: string | null
    imageUrl?: string | null
    token?: string | null
    role?: $Enums.Role
    provider?: $Enums.Provider
    isVerified?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewCreateNestedManyWithoutUserInput
    payment?: PaymentCreateNestedManyWithoutUserInput
    Tenant?: TenantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    imageUrl?: string | null
    token?: string | null
    role?: $Enums.Role
    provider?: $Enums.Provider
    isVerified?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedManyWithoutUserInput
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
    Tenant?: TenantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateManyWithoutUserNestedInput
    payment?: PaymentUpdateManyWithoutUserNestedInput
    Tenant?: TenantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    Tenant?: TenantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    imageUrl?: string | null
    token?: string | null
    role?: $Enums.Role
    provider?: $Enums.Provider
    isVerified?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCreateInput = {
    name: string
    imageUrl?: string | null
    phoneNumber?: string | null
    bankName: string
    bankNumber: string
    balance?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTenantInput
    property?: PropertyCreateNestedManyWithoutTenantInput
    PropertyCategory?: PropertyCategoryCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: number
    name: string
    imageUrl?: string | null
    phoneNumber?: string | null
    bankName: string
    bankNumber: string
    userId: number
    balance?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    property?: PropertyUncheckedCreateNestedManyWithoutTenantInput
    PropertyCategory?: PropertyCategoryUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: StringFieldUpdateOperationsInput | string
    bankNumber?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTenantNestedInput
    property?: PropertyUpdateManyWithoutTenantNestedInput
    PropertyCategory?: PropertyCategoryUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: StringFieldUpdateOperationsInput | string
    bankNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUncheckedUpdateManyWithoutTenantNestedInput
    PropertyCategory?: PropertyCategoryUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: number
    name: string
    imageUrl?: string | null
    phoneNumber?: string | null
    bankName: string
    bankNumber: string
    userId: number
    balance?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: StringFieldUpdateOperationsInput | string
    bankNumber?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: StringFieldUpdateOperationsInput | string
    bankNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateInput = {
    slug: string
    title: string
    description: string
    latitude: string
    longitude: string
    status: $Enums.StatusProperty
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    location: string
    propertyImage?: PropertyImageCreateNestedManyWithoutPropertyInput
    propertyFacility?: PropertyFacilityCreateNestedManyWithoutPropertyInput
    room?: RoomCreateNestedManyWithoutPropertyInput
    tenant: TenantCreateNestedOneWithoutPropertyInput
    review?: ReviewCreateNestedManyWithoutPropertyInput
    propertyCategory: PropertyCategoryCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: number
    slug: string
    title: string
    description: string
    latitude: string
    longitude: string
    status: $Enums.StatusProperty
    isDeleted?: boolean
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    location: string
    propertyCategoryId: number
    propertyImage?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    propertyFacility?: PropertyFacilityUncheckedCreateNestedManyWithoutPropertyInput
    room?: RoomUncheckedCreateNestedManyWithoutPropertyInput
    review?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPropertyFieldUpdateOperationsInput | $Enums.StatusProperty
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    propertyImage?: PropertyImageUpdateManyWithoutPropertyNestedInput
    propertyFacility?: PropertyFacilityUpdateManyWithoutPropertyNestedInput
    room?: RoomUpdateManyWithoutPropertyNestedInput
    tenant?: TenantUpdateOneRequiredWithoutPropertyNestedInput
    review?: ReviewUpdateManyWithoutPropertyNestedInput
    propertyCategory?: PropertyCategoryUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPropertyFieldUpdateOperationsInput | $Enums.StatusProperty
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    propertyCategoryId?: IntFieldUpdateOperationsInput | number
    propertyImage?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    propertyFacility?: PropertyFacilityUncheckedUpdateManyWithoutPropertyNestedInput
    room?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
    review?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: number
    slug: string
    title: string
    description: string
    latitude: string
    longitude: string
    status: $Enums.StatusProperty
    isDeleted?: boolean
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    location: string
    propertyCategoryId: number
  }

  export type PropertyUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPropertyFieldUpdateOperationsInput | $Enums.StatusProperty
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPropertyFieldUpdateOperationsInput | $Enums.StatusProperty
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    propertyCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type PropertyCategoryCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutPropertycategoryInput
    tenant: TenantCreateNestedOneWithoutPropertyCategoryInput
  }

  export type PropertyCategoryUncheckedCreateInput = {
    id?: number
    name: string
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutPropertycategoryInput
  }

  export type PropertyCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutPropertycategoryNestedInput
    tenant?: TenantUpdateOneRequiredWithoutPropertyCategoryNestedInput
  }

  export type PropertyCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutPropertycategoryNestedInput
  }

  export type PropertyCategoryCreateManyInput = {
    id?: number
    name: string
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageCreateInput = {
    imageUrl?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutPropertyImageInput
  }

  export type PropertyImageUncheckedCreateInput = {
    id?: number
    imageUrl?: string | null
    isDeleted?: boolean
    propertyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyImageUpdateInput = {
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutPropertyImageNestedInput
  }

  export type PropertyImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    propertyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageCreateManyInput = {
    id?: number
    imageUrl?: string | null
    isDeleted?: boolean
    propertyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyImageUpdateManyMutationInput = {
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    propertyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyFacilityCreateInput = {
    title: string
    description: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutPropertyFacilityInput
  }

  export type PropertyFacilityUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    isDeleted?: boolean
    propertyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyFacilityUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutPropertyFacilityNestedInput
  }

  export type PropertyFacilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    propertyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyFacilityCreateManyInput = {
    id?: number
    title: string
    description: string
    isDeleted?: boolean
    propertyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyFacilityUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyFacilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    propertyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    type: $Enums.Type
    stock: number
    price: number
    guest: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    peakSeasonRate?: PeakSeasonRateCreateNestedManyWithoutRoomInput
    roomFacility?: RoomFacilityCreateNestedManyWithoutRoomInput
    roomImage?: RoomImageCreateNestedManyWithoutRoomInput
    roomNonAvailability?: RoomNonAvailabilityCreateNestedManyWithoutRoomInput
    property: PropertyCreateNestedOneWithoutRoomInput
    reservation?: ReservationCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: number
    type: $Enums.Type
    stock: number
    price: number
    guest: number
    isDeleted?: boolean
    propertyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    peakSeasonRate?: PeakSeasonRateUncheckedCreateNestedManyWithoutRoomInput
    roomFacility?: RoomFacilityUncheckedCreateNestedManyWithoutRoomInput
    roomImage?: RoomImageUncheckedCreateNestedManyWithoutRoomInput
    roomNonAvailability?: RoomNonAvailabilityUncheckedCreateNestedManyWithoutRoomInput
    reservation?: ReservationUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    guest?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peakSeasonRate?: PeakSeasonRateUpdateManyWithoutRoomNestedInput
    roomFacility?: RoomFacilityUpdateManyWithoutRoomNestedInput
    roomImage?: RoomImageUpdateManyWithoutRoomNestedInput
    roomNonAvailability?: RoomNonAvailabilityUpdateManyWithoutRoomNestedInput
    property?: PropertyUpdateOneRequiredWithoutRoomNestedInput
    reservation?: ReservationUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    guest?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    propertyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peakSeasonRate?: PeakSeasonRateUncheckedUpdateManyWithoutRoomNestedInput
    roomFacility?: RoomFacilityUncheckedUpdateManyWithoutRoomNestedInput
    roomImage?: RoomImageUncheckedUpdateManyWithoutRoomNestedInput
    roomNonAvailability?: RoomNonAvailabilityUncheckedUpdateManyWithoutRoomNestedInput
    reservation?: ReservationUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: number
    type: $Enums.Type
    stock: number
    price: number
    guest: number
    isDeleted?: boolean
    propertyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    guest?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    guest?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    propertyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeakSeasonRateCreateInput = {
    price: number
    startDate: Date | string
    endDate: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutPeakSeasonRateInput
  }

  export type PeakSeasonRateUncheckedCreateInput = {
    id?: number
    price: number
    startDate: Date | string
    endDate: Date | string
    isDeleted?: boolean
    roomId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeakSeasonRateUpdateInput = {
    price?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutPeakSeasonRateNestedInput
  }

  export type PeakSeasonRateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roomId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeakSeasonRateCreateManyInput = {
    id?: number
    price: number
    startDate: Date | string
    endDate: Date | string
    isDeleted?: boolean
    roomId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeakSeasonRateUpdateManyMutationInput = {
    price?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeakSeasonRateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roomId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomFacilityCreateInput = {
    title: string
    description: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutRoomFacilityInput
  }

  export type RoomFacilityUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    isDeleted?: boolean
    roomId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomFacilityUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutRoomFacilityNestedInput
  }

  export type RoomFacilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roomId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomFacilityCreateManyInput = {
    id?: number
    title: string
    description: string
    isDeleted?: boolean
    roomId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomFacilityUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomFacilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roomId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomImageCreateInput = {
    imageUrl?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutRoomImageInput
  }

  export type RoomImageUncheckedCreateInput = {
    id?: number
    imageUrl?: string | null
    isDeleted?: boolean
    roomId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomImageUpdateInput = {
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutRoomImageNestedInput
  }

  export type RoomImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roomId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomImageCreateManyInput = {
    id?: number
    imageUrl?: string | null
    isDeleted?: boolean
    roomId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomImageUpdateManyMutationInput = {
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    roomId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomNonAvailabilityCreateInput = {
    startDate: Date | string
    endDate: Date | string
    isDeleted?: boolean
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutRoomNonAvailabilityInput
  }

  export type RoomNonAvailabilityUncheckedCreateInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    isDeleted?: boolean
    reason?: string | null
    roomId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomNonAvailabilityUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutRoomNonAvailabilityNestedInput
  }

  export type RoomNonAvailabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomNonAvailabilityCreateManyInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    isDeleted?: boolean
    reason?: string | null
    roomId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomNonAvailabilityUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomNonAvailabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    uuid?: string
    status: $Enums.StatusPayment
    totalPrice: number
    duration: number
    paymentMethode?: $Enums.PaymentMethode
    paymentProof?: string | null
    invoiceUrl?: string | null
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewCreateNestedManyWithoutPaymentInput
    user: UserCreateNestedOneWithoutPaymentInput
    reservation?: ReservationCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    uuid?: string
    userId: number
    status: $Enums.StatusPayment
    totalPrice: number
    duration: number
    paymentMethode?: $Enums.PaymentMethode
    paymentProof?: string | null
    invoiceUrl?: string | null
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedManyWithoutPaymentInput
    reservation?: ReservationUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPaymentFieldUpdateOperationsInput | $Enums.StatusPayment
    totalPrice?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    paymentMethode?: EnumPaymentMethodeFieldUpdateOperationsInput | $Enums.PaymentMethode
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateManyWithoutPaymentNestedInput
    user?: UserUpdateOneRequiredWithoutPaymentNestedInput
    reservation?: ReservationUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusPaymentFieldUpdateOperationsInput | $Enums.StatusPayment
    totalPrice?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    paymentMethode?: EnumPaymentMethodeFieldUpdateOperationsInput | $Enums.PaymentMethode
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateManyWithoutPaymentNestedInput
    reservation?: ReservationUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentCreateManyInput = {
    id?: number
    uuid?: string
    userId: number
    status: $Enums.StatusPayment
    totalPrice: number
    duration: number
    paymentMethode?: $Enums.PaymentMethode
    paymentProof?: string | null
    invoiceUrl?: string | null
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPaymentFieldUpdateOperationsInput | $Enums.StatusPayment
    totalPrice?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    paymentMethode?: EnumPaymentMethodeFieldUpdateOperationsInput | $Enums.PaymentMethode
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusPaymentFieldUpdateOperationsInput | $Enums.StatusPayment
    totalPrice?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    paymentMethode?: EnumPaymentMethodeFieldUpdateOperationsInput | $Enums.PaymentMethode
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateInput = {
    uuid?: string
    price: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutReservationInput
    payment: PaymentCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateInput = {
    id?: number
    uuid?: string
    roomId: number
    paymentId: number
    price: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutReservationNestedInput
    payment?: PaymentUpdateOneRequiredWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    roomId?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateManyInput = {
    id?: number
    uuid?: string
    roomId: number
    paymentId: number
    price: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    roomId?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    rating?: number
    review: string
    replyMessage?: string | null
    replyDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewInput
    property: PropertyCreateNestedOneWithoutReviewInput
    payment: PaymentCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    rating?: number
    review: string
    userId: number
    paymentId: number
    propertyId: number
    replyMessage?: string | null
    replyDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    replyMessage?: NullableStringFieldUpdateOperationsInput | string | null
    replyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewNestedInput
    property?: PropertyUpdateOneRequiredWithoutReviewNestedInput
    payment?: PaymentUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    replyMessage?: NullableStringFieldUpdateOperationsInput | string | null
    replyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    rating?: number
    review: string
    userId: number
    paymentId: number
    propertyId: number
    replyMessage?: string | null
    replyDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    replyMessage?: NullableStringFieldUpdateOperationsInput | string | null
    replyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    replyMessage?: NullableStringFieldUpdateOperationsInput | string | null
    replyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SampleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SampleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SampleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SampleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SampleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type TenantListRelationFilter = {
    every?: TenantWhereInput
    some?: TenantWhereInput
    none?: TenantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    imageUrl?: SortOrder
    token?: SortOrder
    role?: SortOrder
    provider?: SortOrder
    isVerified?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    imageUrl?: SortOrder
    token?: SortOrder
    role?: SortOrder
    provider?: SortOrder
    isVerified?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    imageUrl?: SortOrder
    token?: SortOrder
    role?: SortOrder
    provider?: SortOrder
    isVerified?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type PropertyCategoryListRelationFilter = {
    every?: PropertyCategoryWhereInput
    some?: PropertyCategoryWhereInput
    none?: PropertyCategoryWhereInput
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    phoneNumber?: SortOrder
    bankName?: SortOrder
    bankNumber?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    phoneNumber?: SortOrder
    bankName?: SortOrder
    bankNumber?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    phoneNumber?: SortOrder
    bankName?: SortOrder
    bankNumber?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
  }

  export type EnumStatusPropertyFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusProperty | EnumStatusPropertyFieldRefInput<$PrismaModel>
    in?: $Enums.StatusProperty[] | ListEnumStatusPropertyFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusProperty[] | ListEnumStatusPropertyFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPropertyFilter<$PrismaModel> | $Enums.StatusProperty
  }

  export type PropertyImageListRelationFilter = {
    every?: PropertyImageWhereInput
    some?: PropertyImageWhereInput
    none?: PropertyImageWhereInput
  }

  export type PropertyFacilityListRelationFilter = {
    every?: PropertyFacilityWhereInput
    some?: PropertyFacilityWhereInput
    none?: PropertyFacilityWhereInput
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type PropertyCategoryScalarRelationFilter = {
    is?: PropertyCategoryWhereInput
    isNot?: PropertyCategoryWhereInput
  }

  export type PropertyImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyFacilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    isDeleted?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrder
    propertyCategoryId?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    propertyCategoryId?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    isDeleted?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrder
    propertyCategoryId?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    isDeleted?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrder
    propertyCategoryId?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    propertyCategoryId?: SortOrder
  }

  export type EnumStatusPropertyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusProperty | EnumStatusPropertyFieldRefInput<$PrismaModel>
    in?: $Enums.StatusProperty[] | ListEnumStatusPropertyFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusProperty[] | ListEnumStatusPropertyFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPropertyWithAggregatesFilter<$PrismaModel> | $Enums.StatusProperty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPropertyFilter<$PrismaModel>
    _max?: NestedEnumStatusPropertyFilter<$PrismaModel>
  }

  export type PropertyCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
  }

  export type PropertyCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyCategorySumOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
  }

  export type PropertyScalarRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type PropertyImageCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    isDeleted?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyImageAvgOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
  }

  export type PropertyImageMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    isDeleted?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyImageMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    isDeleted?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyImageSumOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
  }

  export type PropertyFacilityCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isDeleted?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyFacilityAvgOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
  }

  export type PropertyFacilityMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isDeleted?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyFacilityMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isDeleted?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyFacilitySumOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
  }

  export type EnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type PeakSeasonRateListRelationFilter = {
    every?: PeakSeasonRateWhereInput
    some?: PeakSeasonRateWhereInput
    none?: PeakSeasonRateWhereInput
  }

  export type RoomFacilityListRelationFilter = {
    every?: RoomFacilityWhereInput
    some?: RoomFacilityWhereInput
    none?: RoomFacilityWhereInput
  }

  export type RoomImageListRelationFilter = {
    every?: RoomImageWhereInput
    some?: RoomImageWhereInput
    none?: RoomImageWhereInput
  }

  export type RoomNonAvailabilityListRelationFilter = {
    every?: RoomNonAvailabilityWhereInput
    some?: RoomNonAvailabilityWhereInput
    none?: RoomNonAvailabilityWhereInput
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type PeakSeasonRateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomFacilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomNonAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    guest?: SortOrder
    isDeleted?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    guest?: SortOrder
    propertyId?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    guest?: SortOrder
    isDeleted?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    guest?: SortOrder
    isDeleted?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    guest?: SortOrder
    propertyId?: SortOrder
  }

  export type EnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type PeakSeasonRateCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isDeleted?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeakSeasonRateAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    roomId?: SortOrder
  }

  export type PeakSeasonRateMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isDeleted?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeakSeasonRateMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isDeleted?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeakSeasonRateSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    roomId?: SortOrder
  }

  export type RoomFacilityCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isDeleted?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomFacilityAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type RoomFacilityMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isDeleted?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomFacilityMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isDeleted?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomFacilitySumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type RoomImageCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    isDeleted?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomImageAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type RoomImageMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    isDeleted?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomImageMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    isDeleted?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomImageSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type RoomNonAvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isDeleted?: SortOrder
    reason?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomNonAvailabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type RoomNonAvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isDeleted?: SortOrder
    reason?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomNonAvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isDeleted?: SortOrder
    reason?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomNonAvailabilitySumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type EnumStatusPaymentFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPayment | EnumStatusPaymentFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPayment[] | ListEnumStatusPaymentFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPayment[] | ListEnumStatusPaymentFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPaymentFilter<$PrismaModel> | $Enums.StatusPayment
  }

  export type EnumPaymentMethodeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethode | EnumPaymentMethodeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethode[] | ListEnumPaymentMethodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethode[] | ListEnumPaymentMethodeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodeFilter<$PrismaModel> | $Enums.PaymentMethode
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    duration?: SortOrder
    paymentMethode?: SortOrder
    paymentProof?: SortOrder
    invoiceUrl?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
    duration?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    duration?: SortOrder
    paymentMethode?: SortOrder
    paymentProof?: SortOrder
    invoiceUrl?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    duration?: SortOrder
    paymentMethode?: SortOrder
    paymentProof?: SortOrder
    invoiceUrl?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
    duration?: SortOrder
  }

  export type EnumStatusPaymentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPayment | EnumStatusPaymentFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPayment[] | ListEnumStatusPaymentFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPayment[] | ListEnumStatusPaymentFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPaymentWithAggregatesFilter<$PrismaModel> | $Enums.StatusPayment
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPaymentFilter<$PrismaModel>
    _max?: NestedEnumStatusPaymentFilter<$PrismaModel>
  }

  export type EnumPaymentMethodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethode | EnumPaymentMethodeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethode[] | ListEnumPaymentMethodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethode[] | ListEnumPaymentMethodeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodeFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PaymentScalarRelationFilter = {
    is?: PaymentWhereInput
    isNot?: PaymentWhereInput
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    roomId?: SortOrder
    paymentId?: SortOrder
    price?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    paymentId?: SortOrder
    price?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    roomId?: SortOrder
    paymentId?: SortOrder
    price?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    roomId?: SortOrder
    paymentId?: SortOrder
    price?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    paymentId?: SortOrder
    price?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    userId?: SortOrder
    paymentId?: SortOrder
    propertyId?: SortOrder
    replyMessage?: SortOrder
    replyDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    paymentId?: SortOrder
    propertyId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    userId?: SortOrder
    paymentId?: SortOrder
    propertyId?: SortOrder
    replyMessage?: SortOrder
    replyDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    userId?: SortOrder
    paymentId?: SortOrder
    propertyId?: SortOrder
    replyMessage?: SortOrder
    replyDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    paymentId?: SortOrder
    propertyId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type TenantCreateNestedManyWithoutUserInput = {
    create?: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput> | TenantCreateWithoutUserInput[] | TenantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TenantCreateOrConnectWithoutUserInput | TenantCreateOrConnectWithoutUserInput[]
    createMany?: TenantCreateManyUserInputEnvelope
    connect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type TenantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput> | TenantCreateWithoutUserInput[] | TenantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TenantCreateOrConnectWithoutUserInput | TenantCreateOrConnectWithoutUserInput[]
    createMany?: TenantCreateManyUserInputEnvelope
    connect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumProviderFieldUpdateOperationsInput = {
    set?: $Enums.Provider
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type TenantUpdateManyWithoutUserNestedInput = {
    create?: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput> | TenantCreateWithoutUserInput[] | TenantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TenantCreateOrConnectWithoutUserInput | TenantCreateOrConnectWithoutUserInput[]
    upsert?: TenantUpsertWithWhereUniqueWithoutUserInput | TenantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TenantCreateManyUserInputEnvelope
    set?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    disconnect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    delete?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    connect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    update?: TenantUpdateWithWhereUniqueWithoutUserInput | TenantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TenantUpdateManyWithWhereWithoutUserInput | TenantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TenantScalarWhereInput | TenantScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type TenantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput> | TenantCreateWithoutUserInput[] | TenantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TenantCreateOrConnectWithoutUserInput | TenantCreateOrConnectWithoutUserInput[]
    upsert?: TenantUpsertWithWhereUniqueWithoutUserInput | TenantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TenantCreateManyUserInputEnvelope
    set?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    disconnect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    delete?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    connect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    update?: TenantUpdateWithWhereUniqueWithoutUserInput | TenantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TenantUpdateManyWithWhereWithoutUserInput | TenantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TenantScalarWhereInput | TenantScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyCreateNestedManyWithoutTenantInput = {
    create?: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput> | PropertyCreateWithoutTenantInput[] | PropertyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantInput | PropertyCreateOrConnectWithoutTenantInput[]
    createMany?: PropertyCreateManyTenantInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyCategoryCreateNestedManyWithoutTenantInput = {
    create?: XOR<PropertyCategoryCreateWithoutTenantInput, PropertyCategoryUncheckedCreateWithoutTenantInput> | PropertyCategoryCreateWithoutTenantInput[] | PropertyCategoryUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCategoryCreateOrConnectWithoutTenantInput | PropertyCategoryCreateOrConnectWithoutTenantInput[]
    createMany?: PropertyCategoryCreateManyTenantInputEnvelope
    connect?: PropertyCategoryWhereUniqueInput | PropertyCategoryWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput> | PropertyCreateWithoutTenantInput[] | PropertyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantInput | PropertyCreateOrConnectWithoutTenantInput[]
    createMany?: PropertyCreateManyTenantInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyCategoryUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<PropertyCategoryCreateWithoutTenantInput, PropertyCategoryUncheckedCreateWithoutTenantInput> | PropertyCategoryCreateWithoutTenantInput[] | PropertyCategoryUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCategoryCreateOrConnectWithoutTenantInput | PropertyCategoryCreateOrConnectWithoutTenantInput[]
    createMany?: PropertyCategoryCreateManyTenantInputEnvelope
    connect?: PropertyCategoryWhereUniqueInput | PropertyCategoryWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput
    upsert?: UserUpsertWithoutTenantInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTenantInput, UserUpdateWithoutTenantInput>, UserUncheckedUpdateWithoutTenantInput>
  }

  export type PropertyUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput> | PropertyCreateWithoutTenantInput[] | PropertyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantInput | PropertyCreateOrConnectWithoutTenantInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutTenantInput | PropertyUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PropertyCreateManyTenantInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutTenantInput | PropertyUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutTenantInput | PropertyUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PropertyCategoryUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PropertyCategoryCreateWithoutTenantInput, PropertyCategoryUncheckedCreateWithoutTenantInput> | PropertyCategoryCreateWithoutTenantInput[] | PropertyCategoryUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCategoryCreateOrConnectWithoutTenantInput | PropertyCategoryCreateOrConnectWithoutTenantInput[]
    upsert?: PropertyCategoryUpsertWithWhereUniqueWithoutTenantInput | PropertyCategoryUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PropertyCategoryCreateManyTenantInputEnvelope
    set?: PropertyCategoryWhereUniqueInput | PropertyCategoryWhereUniqueInput[]
    disconnect?: PropertyCategoryWhereUniqueInput | PropertyCategoryWhereUniqueInput[]
    delete?: PropertyCategoryWhereUniqueInput | PropertyCategoryWhereUniqueInput[]
    connect?: PropertyCategoryWhereUniqueInput | PropertyCategoryWhereUniqueInput[]
    update?: PropertyCategoryUpdateWithWhereUniqueWithoutTenantInput | PropertyCategoryUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PropertyCategoryUpdateManyWithWhereWithoutTenantInput | PropertyCategoryUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PropertyCategoryScalarWhereInput | PropertyCategoryScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput> | PropertyCreateWithoutTenantInput[] | PropertyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantInput | PropertyCreateOrConnectWithoutTenantInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutTenantInput | PropertyUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PropertyCreateManyTenantInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutTenantInput | PropertyUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutTenantInput | PropertyUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PropertyCategoryUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PropertyCategoryCreateWithoutTenantInput, PropertyCategoryUncheckedCreateWithoutTenantInput> | PropertyCategoryCreateWithoutTenantInput[] | PropertyCategoryUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCategoryCreateOrConnectWithoutTenantInput | PropertyCategoryCreateOrConnectWithoutTenantInput[]
    upsert?: PropertyCategoryUpsertWithWhereUniqueWithoutTenantInput | PropertyCategoryUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PropertyCategoryCreateManyTenantInputEnvelope
    set?: PropertyCategoryWhereUniqueInput | PropertyCategoryWhereUniqueInput[]
    disconnect?: PropertyCategoryWhereUniqueInput | PropertyCategoryWhereUniqueInput[]
    delete?: PropertyCategoryWhereUniqueInput | PropertyCategoryWhereUniqueInput[]
    connect?: PropertyCategoryWhereUniqueInput | PropertyCategoryWhereUniqueInput[]
    update?: PropertyCategoryUpdateWithWhereUniqueWithoutTenantInput | PropertyCategoryUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PropertyCategoryUpdateManyWithWhereWithoutTenantInput | PropertyCategoryUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PropertyCategoryScalarWhereInput | PropertyCategoryScalarWhereInput[]
  }

  export type PropertyImageCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
  }

  export type PropertyFacilityCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyFacilityCreateWithoutPropertyInput, PropertyFacilityUncheckedCreateWithoutPropertyInput> | PropertyFacilityCreateWithoutPropertyInput[] | PropertyFacilityUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyFacilityCreateOrConnectWithoutPropertyInput | PropertyFacilityCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyFacilityCreateManyPropertyInputEnvelope
    connect?: PropertyFacilityWhereUniqueInput | PropertyFacilityWhereUniqueInput[]
  }

  export type RoomCreateNestedManyWithoutPropertyInput = {
    create?: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput> | RoomCreateWithoutPropertyInput[] | RoomUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPropertyInput | RoomCreateOrConnectWithoutPropertyInput[]
    createMany?: RoomCreateManyPropertyInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type TenantCreateNestedOneWithoutPropertyInput = {
    create?: XOR<TenantCreateWithoutPropertyInput, TenantUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPropertyInput
    connect?: TenantWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput> | ReviewCreateWithoutPropertyInput[] | ReviewUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPropertyInput | ReviewCreateOrConnectWithoutPropertyInput[]
    createMany?: ReviewCreateManyPropertyInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PropertyCategoryCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<PropertyCategoryCreateWithoutPropertiesInput, PropertyCategoryUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: PropertyCategoryCreateOrConnectWithoutPropertiesInput
    connect?: PropertyCategoryWhereUniqueInput
  }

  export type PropertyImageUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
  }

  export type PropertyFacilityUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyFacilityCreateWithoutPropertyInput, PropertyFacilityUncheckedCreateWithoutPropertyInput> | PropertyFacilityCreateWithoutPropertyInput[] | PropertyFacilityUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyFacilityCreateOrConnectWithoutPropertyInput | PropertyFacilityCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyFacilityCreateManyPropertyInputEnvelope
    connect?: PropertyFacilityWhereUniqueInput | PropertyFacilityWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput> | RoomCreateWithoutPropertyInput[] | RoomUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPropertyInput | RoomCreateOrConnectWithoutPropertyInput[]
    createMany?: RoomCreateManyPropertyInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput> | ReviewCreateWithoutPropertyInput[] | ReviewUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPropertyInput | ReviewCreateOrConnectWithoutPropertyInput[]
    createMany?: ReviewCreateManyPropertyInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EnumStatusPropertyFieldUpdateOperationsInput = {
    set?: $Enums.StatusProperty
  }

  export type PropertyImageUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyImageUpsertWithWhereUniqueWithoutPropertyInput | PropertyImageUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    set?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    disconnect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    delete?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    update?: PropertyImageUpdateWithWhereUniqueWithoutPropertyInput | PropertyImageUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyImageUpdateManyWithWhereWithoutPropertyInput | PropertyImageUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
  }

  export type PropertyFacilityUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyFacilityCreateWithoutPropertyInput, PropertyFacilityUncheckedCreateWithoutPropertyInput> | PropertyFacilityCreateWithoutPropertyInput[] | PropertyFacilityUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyFacilityCreateOrConnectWithoutPropertyInput | PropertyFacilityCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyFacilityUpsertWithWhereUniqueWithoutPropertyInput | PropertyFacilityUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyFacilityCreateManyPropertyInputEnvelope
    set?: PropertyFacilityWhereUniqueInput | PropertyFacilityWhereUniqueInput[]
    disconnect?: PropertyFacilityWhereUniqueInput | PropertyFacilityWhereUniqueInput[]
    delete?: PropertyFacilityWhereUniqueInput | PropertyFacilityWhereUniqueInput[]
    connect?: PropertyFacilityWhereUniqueInput | PropertyFacilityWhereUniqueInput[]
    update?: PropertyFacilityUpdateWithWhereUniqueWithoutPropertyInput | PropertyFacilityUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyFacilityUpdateManyWithWhereWithoutPropertyInput | PropertyFacilityUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyFacilityScalarWhereInput | PropertyFacilityScalarWhereInput[]
  }

  export type RoomUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput> | RoomCreateWithoutPropertyInput[] | RoomUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPropertyInput | RoomCreateOrConnectWithoutPropertyInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutPropertyInput | RoomUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: RoomCreateManyPropertyInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutPropertyInput | RoomUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutPropertyInput | RoomUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type TenantUpdateOneRequiredWithoutPropertyNestedInput = {
    create?: XOR<TenantCreateWithoutPropertyInput, TenantUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPropertyInput
    upsert?: TenantUpsertWithoutPropertyInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutPropertyInput, TenantUpdateWithoutPropertyInput>, TenantUncheckedUpdateWithoutPropertyInput>
  }

  export type ReviewUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput> | ReviewCreateWithoutPropertyInput[] | ReviewUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPropertyInput | ReviewCreateOrConnectWithoutPropertyInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutPropertyInput | ReviewUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ReviewCreateManyPropertyInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutPropertyInput | ReviewUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutPropertyInput | ReviewUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PropertyCategoryUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<PropertyCategoryCreateWithoutPropertiesInput, PropertyCategoryUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: PropertyCategoryCreateOrConnectWithoutPropertiesInput
    upsert?: PropertyCategoryUpsertWithoutPropertiesInput
    connect?: PropertyCategoryWhereUniqueInput
    update?: XOR<XOR<PropertyCategoryUpdateToOneWithWhereWithoutPropertiesInput, PropertyCategoryUpdateWithoutPropertiesInput>, PropertyCategoryUncheckedUpdateWithoutPropertiesInput>
  }

  export type PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyImageUpsertWithWhereUniqueWithoutPropertyInput | PropertyImageUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    set?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    disconnect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    delete?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    update?: PropertyImageUpdateWithWhereUniqueWithoutPropertyInput | PropertyImageUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyImageUpdateManyWithWhereWithoutPropertyInput | PropertyImageUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
  }

  export type PropertyFacilityUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyFacilityCreateWithoutPropertyInput, PropertyFacilityUncheckedCreateWithoutPropertyInput> | PropertyFacilityCreateWithoutPropertyInput[] | PropertyFacilityUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyFacilityCreateOrConnectWithoutPropertyInput | PropertyFacilityCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyFacilityUpsertWithWhereUniqueWithoutPropertyInput | PropertyFacilityUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyFacilityCreateManyPropertyInputEnvelope
    set?: PropertyFacilityWhereUniqueInput | PropertyFacilityWhereUniqueInput[]
    disconnect?: PropertyFacilityWhereUniqueInput | PropertyFacilityWhereUniqueInput[]
    delete?: PropertyFacilityWhereUniqueInput | PropertyFacilityWhereUniqueInput[]
    connect?: PropertyFacilityWhereUniqueInput | PropertyFacilityWhereUniqueInput[]
    update?: PropertyFacilityUpdateWithWhereUniqueWithoutPropertyInput | PropertyFacilityUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyFacilityUpdateManyWithWhereWithoutPropertyInput | PropertyFacilityUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyFacilityScalarWhereInput | PropertyFacilityScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput> | RoomCreateWithoutPropertyInput[] | RoomUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPropertyInput | RoomCreateOrConnectWithoutPropertyInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutPropertyInput | RoomUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: RoomCreateManyPropertyInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutPropertyInput | RoomUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutPropertyInput | RoomUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput> | ReviewCreateWithoutPropertyInput[] | ReviewUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPropertyInput | ReviewCreateOrConnectWithoutPropertyInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutPropertyInput | ReviewUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ReviewCreateManyPropertyInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutPropertyInput | ReviewUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutPropertyInput | ReviewUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PropertyCreateNestedManyWithoutPropertyCategoryInput = {
    create?: XOR<PropertyCreateWithoutPropertyCategoryInput, PropertyUncheckedCreateWithoutPropertyCategoryInput> | PropertyCreateWithoutPropertyCategoryInput[] | PropertyUncheckedCreateWithoutPropertyCategoryInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutPropertyCategoryInput | PropertyCreateOrConnectWithoutPropertyCategoryInput[]
    createMany?: PropertyCreateManyPropertyCategoryInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type TenantCreateNestedOneWithoutPropertyCategoryInput = {
    create?: XOR<TenantCreateWithoutPropertyCategoryInput, TenantUncheckedCreateWithoutPropertyCategoryInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPropertyCategoryInput
    connect?: TenantWhereUniqueInput
  }

  export type PropertyUncheckedCreateNestedManyWithoutPropertyCategoryInput = {
    create?: XOR<PropertyCreateWithoutPropertyCategoryInput, PropertyUncheckedCreateWithoutPropertyCategoryInput> | PropertyCreateWithoutPropertyCategoryInput[] | PropertyUncheckedCreateWithoutPropertyCategoryInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutPropertyCategoryInput | PropertyCreateOrConnectWithoutPropertyCategoryInput[]
    createMany?: PropertyCreateManyPropertyCategoryInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUpdateManyWithoutPropertyCategoryNestedInput = {
    create?: XOR<PropertyCreateWithoutPropertyCategoryInput, PropertyUncheckedCreateWithoutPropertyCategoryInput> | PropertyCreateWithoutPropertyCategoryInput[] | PropertyUncheckedCreateWithoutPropertyCategoryInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutPropertyCategoryInput | PropertyCreateOrConnectWithoutPropertyCategoryInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutPropertyCategoryInput | PropertyUpsertWithWhereUniqueWithoutPropertyCategoryInput[]
    createMany?: PropertyCreateManyPropertyCategoryInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutPropertycategoryInput | PropertyUpdateWithWhereUniqueWithoutPropertycategoryInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutPropertycategoryInput | PropertyUpdateManyWithWhereWithoutPropertycategoryInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type TenantUpdateOneRequiredWithoutPropertyCategoryNestedInput = {
    create?: XOR<TenantCreateWithoutPropertyCategoryInput, TenantUncheckedCreateWithoutPropertyCategoryInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPropertyCategoryInput
    upsert?: TenantUpsertWithoutPropertyCategoryInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutPropertyCategoryInput, TenantUpdateWithoutPropertyCategoryInput>, TenantUncheckedUpdateWithoutPropertyCategoryInput>
  }

  export type PropertyUncheckedUpdateManyWithoutPropertyCategoryNestedInput = {
    create?: XOR<PropertyCreateWithoutPropertyCategoryInput, PropertyUncheckedCreateWithoutPropertyCategoryInput> | PropertyCreateWithoutPropertyCategoryInput[] | PropertyUncheckedCreateWithoutPropertyCategoryInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutPropertyCategoryInput | PropertyCreateOrConnectWithoutPropertyCategoryInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutPropertyCategoryInput | PropertyUpsertWithWhereUniqueWithoutPropertyCategoryInput[]
    createMany?: PropertyCreateManyPropertyCategoryInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutPropertycategoryInput | PropertyUpdateWithWhereUniqueWithoutPropertycategoryInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutPropertycategoryInput | PropertyUpdateManyWithWhereWithoutPropertycategoryInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutPropertyImageInput = {
    create?: XOR<PropertyCreateWithoutPropertyImageInput, PropertyUncheckedCreateWithoutPropertyImageInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPropertyImageInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutPropertyImageNestedInput = {
    create?: XOR<PropertyCreateWithoutPropertyImageInput, PropertyUncheckedCreateWithoutPropertyImageInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPropertyImageInput
    upsert?: PropertyUpsertWithoutPropertyImageInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutPropertyImageInput, PropertyUpdateWithoutPropertyImageInput>, PropertyUncheckedUpdateWithoutPropertyImageInput>
  }

  export type PropertyCreateNestedOneWithoutPropertyFacilityInput = {
    create?: XOR<PropertyCreateWithoutPropertyFacilityInput, PropertyUncheckedCreateWithoutPropertyFacilityInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPropertyFacilityInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutPropertyFacilityNestedInput = {
    create?: XOR<PropertyCreateWithoutPropertyFacilityInput, PropertyUncheckedCreateWithoutPropertyFacilityInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPropertyFacilityInput
    upsert?: PropertyUpsertWithoutPropertyFacilityInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutPropertyFacilityInput, PropertyUpdateWithoutPropertyFacilityInput>, PropertyUncheckedUpdateWithoutPropertyFacilityInput>
  }

  export type PeakSeasonRateCreateNestedManyWithoutRoomInput = {
    create?: XOR<PeakSeasonRateCreateWithoutRoomInput, PeakSeasonRateUncheckedCreateWithoutRoomInput> | PeakSeasonRateCreateWithoutRoomInput[] | PeakSeasonRateUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PeakSeasonRateCreateOrConnectWithoutRoomInput | PeakSeasonRateCreateOrConnectWithoutRoomInput[]
    createMany?: PeakSeasonRateCreateManyRoomInputEnvelope
    connect?: PeakSeasonRateWhereUniqueInput | PeakSeasonRateWhereUniqueInput[]
  }

  export type RoomFacilityCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomFacilityCreateWithoutRoomInput, RoomFacilityUncheckedCreateWithoutRoomInput> | RoomFacilityCreateWithoutRoomInput[] | RoomFacilityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomFacilityCreateOrConnectWithoutRoomInput | RoomFacilityCreateOrConnectWithoutRoomInput[]
    createMany?: RoomFacilityCreateManyRoomInputEnvelope
    connect?: RoomFacilityWhereUniqueInput | RoomFacilityWhereUniqueInput[]
  }

  export type RoomImageCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomImageCreateWithoutRoomInput, RoomImageUncheckedCreateWithoutRoomInput> | RoomImageCreateWithoutRoomInput[] | RoomImageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomImageCreateOrConnectWithoutRoomInput | RoomImageCreateOrConnectWithoutRoomInput[]
    createMany?: RoomImageCreateManyRoomInputEnvelope
    connect?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
  }

  export type RoomNonAvailabilityCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomNonAvailabilityCreateWithoutRoomInput, RoomNonAvailabilityUncheckedCreateWithoutRoomInput> | RoomNonAvailabilityCreateWithoutRoomInput[] | RoomNonAvailabilityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomNonAvailabilityCreateOrConnectWithoutRoomInput | RoomNonAvailabilityCreateOrConnectWithoutRoomInput[]
    createMany?: RoomNonAvailabilityCreateManyRoomInputEnvelope
    connect?: RoomNonAvailabilityWhereUniqueInput | RoomNonAvailabilityWhereUniqueInput[]
  }

  export type PropertyCreateNestedOneWithoutRoomInput = {
    create?: XOR<PropertyCreateWithoutRoomInput, PropertyUncheckedCreateWithoutRoomInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutRoomInput
    connect?: PropertyWhereUniqueInput
  }

  export type ReservationCreateNestedManyWithoutRoomInput = {
    create?: XOR<ReservationCreateWithoutRoomInput, ReservationUncheckedCreateWithoutRoomInput> | ReservationCreateWithoutRoomInput[] | ReservationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutRoomInput | ReservationCreateOrConnectWithoutRoomInput[]
    createMany?: ReservationCreateManyRoomInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type PeakSeasonRateUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<PeakSeasonRateCreateWithoutRoomInput, PeakSeasonRateUncheckedCreateWithoutRoomInput> | PeakSeasonRateCreateWithoutRoomInput[] | PeakSeasonRateUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PeakSeasonRateCreateOrConnectWithoutRoomInput | PeakSeasonRateCreateOrConnectWithoutRoomInput[]
    createMany?: PeakSeasonRateCreateManyRoomInputEnvelope
    connect?: PeakSeasonRateWhereUniqueInput | PeakSeasonRateWhereUniqueInput[]
  }

  export type RoomFacilityUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomFacilityCreateWithoutRoomInput, RoomFacilityUncheckedCreateWithoutRoomInput> | RoomFacilityCreateWithoutRoomInput[] | RoomFacilityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomFacilityCreateOrConnectWithoutRoomInput | RoomFacilityCreateOrConnectWithoutRoomInput[]
    createMany?: RoomFacilityCreateManyRoomInputEnvelope
    connect?: RoomFacilityWhereUniqueInput | RoomFacilityWhereUniqueInput[]
  }

  export type RoomImageUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomImageCreateWithoutRoomInput, RoomImageUncheckedCreateWithoutRoomInput> | RoomImageCreateWithoutRoomInput[] | RoomImageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomImageCreateOrConnectWithoutRoomInput | RoomImageCreateOrConnectWithoutRoomInput[]
    createMany?: RoomImageCreateManyRoomInputEnvelope
    connect?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
  }

  export type RoomNonAvailabilityUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomNonAvailabilityCreateWithoutRoomInput, RoomNonAvailabilityUncheckedCreateWithoutRoomInput> | RoomNonAvailabilityCreateWithoutRoomInput[] | RoomNonAvailabilityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomNonAvailabilityCreateOrConnectWithoutRoomInput | RoomNonAvailabilityCreateOrConnectWithoutRoomInput[]
    createMany?: RoomNonAvailabilityCreateManyRoomInputEnvelope
    connect?: RoomNonAvailabilityWhereUniqueInput | RoomNonAvailabilityWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<ReservationCreateWithoutRoomInput, ReservationUncheckedCreateWithoutRoomInput> | ReservationCreateWithoutRoomInput[] | ReservationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutRoomInput | ReservationCreateOrConnectWithoutRoomInput[]
    createMany?: ReservationCreateManyRoomInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type EnumTypeFieldUpdateOperationsInput = {
    set?: $Enums.Type
  }

  export type PeakSeasonRateUpdateManyWithoutRoomNestedInput = {
    create?: XOR<PeakSeasonRateCreateWithoutRoomInput, PeakSeasonRateUncheckedCreateWithoutRoomInput> | PeakSeasonRateCreateWithoutRoomInput[] | PeakSeasonRateUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PeakSeasonRateCreateOrConnectWithoutRoomInput | PeakSeasonRateCreateOrConnectWithoutRoomInput[]
    upsert?: PeakSeasonRateUpsertWithWhereUniqueWithoutRoomInput | PeakSeasonRateUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: PeakSeasonRateCreateManyRoomInputEnvelope
    set?: PeakSeasonRateWhereUniqueInput | PeakSeasonRateWhereUniqueInput[]
    disconnect?: PeakSeasonRateWhereUniqueInput | PeakSeasonRateWhereUniqueInput[]
    delete?: PeakSeasonRateWhereUniqueInput | PeakSeasonRateWhereUniqueInput[]
    connect?: PeakSeasonRateWhereUniqueInput | PeakSeasonRateWhereUniqueInput[]
    update?: PeakSeasonRateUpdateWithWhereUniqueWithoutRoomInput | PeakSeasonRateUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: PeakSeasonRateUpdateManyWithWhereWithoutRoomInput | PeakSeasonRateUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: PeakSeasonRateScalarWhereInput | PeakSeasonRateScalarWhereInput[]
  }

  export type RoomFacilityUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomFacilityCreateWithoutRoomInput, RoomFacilityUncheckedCreateWithoutRoomInput> | RoomFacilityCreateWithoutRoomInput[] | RoomFacilityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomFacilityCreateOrConnectWithoutRoomInput | RoomFacilityCreateOrConnectWithoutRoomInput[]
    upsert?: RoomFacilityUpsertWithWhereUniqueWithoutRoomInput | RoomFacilityUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomFacilityCreateManyRoomInputEnvelope
    set?: RoomFacilityWhereUniqueInput | RoomFacilityWhereUniqueInput[]
    disconnect?: RoomFacilityWhereUniqueInput | RoomFacilityWhereUniqueInput[]
    delete?: RoomFacilityWhereUniqueInput | RoomFacilityWhereUniqueInput[]
    connect?: RoomFacilityWhereUniqueInput | RoomFacilityWhereUniqueInput[]
    update?: RoomFacilityUpdateWithWhereUniqueWithoutRoomInput | RoomFacilityUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomFacilityUpdateManyWithWhereWithoutRoomInput | RoomFacilityUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomFacilityScalarWhereInput | RoomFacilityScalarWhereInput[]
  }

  export type RoomImageUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomImageCreateWithoutRoomInput, RoomImageUncheckedCreateWithoutRoomInput> | RoomImageCreateWithoutRoomInput[] | RoomImageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomImageCreateOrConnectWithoutRoomInput | RoomImageCreateOrConnectWithoutRoomInput[]
    upsert?: RoomImageUpsertWithWhereUniqueWithoutRoomInput | RoomImageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomImageCreateManyRoomInputEnvelope
    set?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    disconnect?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    delete?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    connect?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    update?: RoomImageUpdateWithWhereUniqueWithoutRoomInput | RoomImageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomImageUpdateManyWithWhereWithoutRoomInput | RoomImageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomImageScalarWhereInput | RoomImageScalarWhereInput[]
  }

  export type RoomNonAvailabilityUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomNonAvailabilityCreateWithoutRoomInput, RoomNonAvailabilityUncheckedCreateWithoutRoomInput> | RoomNonAvailabilityCreateWithoutRoomInput[] | RoomNonAvailabilityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomNonAvailabilityCreateOrConnectWithoutRoomInput | RoomNonAvailabilityCreateOrConnectWithoutRoomInput[]
    upsert?: RoomNonAvailabilityUpsertWithWhereUniqueWithoutRoomInput | RoomNonAvailabilityUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomNonAvailabilityCreateManyRoomInputEnvelope
    set?: RoomNonAvailabilityWhereUniqueInput | RoomNonAvailabilityWhereUniqueInput[]
    disconnect?: RoomNonAvailabilityWhereUniqueInput | RoomNonAvailabilityWhereUniqueInput[]
    delete?: RoomNonAvailabilityWhereUniqueInput | RoomNonAvailabilityWhereUniqueInput[]
    connect?: RoomNonAvailabilityWhereUniqueInput | RoomNonAvailabilityWhereUniqueInput[]
    update?: RoomNonAvailabilityUpdateWithWhereUniqueWithoutRoomInput | RoomNonAvailabilityUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomNonAvailabilityUpdateManyWithWhereWithoutRoomInput | RoomNonAvailabilityUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomNonAvailabilityScalarWhereInput | RoomNonAvailabilityScalarWhereInput[]
  }

  export type PropertyUpdateOneRequiredWithoutRoomNestedInput = {
    create?: XOR<PropertyCreateWithoutRoomInput, PropertyUncheckedCreateWithoutRoomInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutRoomInput
    upsert?: PropertyUpsertWithoutRoomInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutRoomInput, PropertyUpdateWithoutRoomInput>, PropertyUncheckedUpdateWithoutRoomInput>
  }

  export type ReservationUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ReservationCreateWithoutRoomInput, ReservationUncheckedCreateWithoutRoomInput> | ReservationCreateWithoutRoomInput[] | ReservationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutRoomInput | ReservationCreateOrConnectWithoutRoomInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutRoomInput | ReservationUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ReservationCreateManyRoomInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutRoomInput | ReservationUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutRoomInput | ReservationUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type PeakSeasonRateUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<PeakSeasonRateCreateWithoutRoomInput, PeakSeasonRateUncheckedCreateWithoutRoomInput> | PeakSeasonRateCreateWithoutRoomInput[] | PeakSeasonRateUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PeakSeasonRateCreateOrConnectWithoutRoomInput | PeakSeasonRateCreateOrConnectWithoutRoomInput[]
    upsert?: PeakSeasonRateUpsertWithWhereUniqueWithoutRoomInput | PeakSeasonRateUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: PeakSeasonRateCreateManyRoomInputEnvelope
    set?: PeakSeasonRateWhereUniqueInput | PeakSeasonRateWhereUniqueInput[]
    disconnect?: PeakSeasonRateWhereUniqueInput | PeakSeasonRateWhereUniqueInput[]
    delete?: PeakSeasonRateWhereUniqueInput | PeakSeasonRateWhereUniqueInput[]
    connect?: PeakSeasonRateWhereUniqueInput | PeakSeasonRateWhereUniqueInput[]
    update?: PeakSeasonRateUpdateWithWhereUniqueWithoutRoomInput | PeakSeasonRateUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: PeakSeasonRateUpdateManyWithWhereWithoutRoomInput | PeakSeasonRateUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: PeakSeasonRateScalarWhereInput | PeakSeasonRateScalarWhereInput[]
  }

  export type RoomFacilityUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomFacilityCreateWithoutRoomInput, RoomFacilityUncheckedCreateWithoutRoomInput> | RoomFacilityCreateWithoutRoomInput[] | RoomFacilityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomFacilityCreateOrConnectWithoutRoomInput | RoomFacilityCreateOrConnectWithoutRoomInput[]
    upsert?: RoomFacilityUpsertWithWhereUniqueWithoutRoomInput | RoomFacilityUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomFacilityCreateManyRoomInputEnvelope
    set?: RoomFacilityWhereUniqueInput | RoomFacilityWhereUniqueInput[]
    disconnect?: RoomFacilityWhereUniqueInput | RoomFacilityWhereUniqueInput[]
    delete?: RoomFacilityWhereUniqueInput | RoomFacilityWhereUniqueInput[]
    connect?: RoomFacilityWhereUniqueInput | RoomFacilityWhereUniqueInput[]
    update?: RoomFacilityUpdateWithWhereUniqueWithoutRoomInput | RoomFacilityUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomFacilityUpdateManyWithWhereWithoutRoomInput | RoomFacilityUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomFacilityScalarWhereInput | RoomFacilityScalarWhereInput[]
  }

  export type RoomImageUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomImageCreateWithoutRoomInput, RoomImageUncheckedCreateWithoutRoomInput> | RoomImageCreateWithoutRoomInput[] | RoomImageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomImageCreateOrConnectWithoutRoomInput | RoomImageCreateOrConnectWithoutRoomInput[]
    upsert?: RoomImageUpsertWithWhereUniqueWithoutRoomInput | RoomImageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomImageCreateManyRoomInputEnvelope
    set?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    disconnect?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    delete?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    connect?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    update?: RoomImageUpdateWithWhereUniqueWithoutRoomInput | RoomImageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomImageUpdateManyWithWhereWithoutRoomInput | RoomImageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomImageScalarWhereInput | RoomImageScalarWhereInput[]
  }

  export type RoomNonAvailabilityUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomNonAvailabilityCreateWithoutRoomInput, RoomNonAvailabilityUncheckedCreateWithoutRoomInput> | RoomNonAvailabilityCreateWithoutRoomInput[] | RoomNonAvailabilityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomNonAvailabilityCreateOrConnectWithoutRoomInput | RoomNonAvailabilityCreateOrConnectWithoutRoomInput[]
    upsert?: RoomNonAvailabilityUpsertWithWhereUniqueWithoutRoomInput | RoomNonAvailabilityUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomNonAvailabilityCreateManyRoomInputEnvelope
    set?: RoomNonAvailabilityWhereUniqueInput | RoomNonAvailabilityWhereUniqueInput[]
    disconnect?: RoomNonAvailabilityWhereUniqueInput | RoomNonAvailabilityWhereUniqueInput[]
    delete?: RoomNonAvailabilityWhereUniqueInput | RoomNonAvailabilityWhereUniqueInput[]
    connect?: RoomNonAvailabilityWhereUniqueInput | RoomNonAvailabilityWhereUniqueInput[]
    update?: RoomNonAvailabilityUpdateWithWhereUniqueWithoutRoomInput | RoomNonAvailabilityUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomNonAvailabilityUpdateManyWithWhereWithoutRoomInput | RoomNonAvailabilityUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomNonAvailabilityScalarWhereInput | RoomNonAvailabilityScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ReservationCreateWithoutRoomInput, ReservationUncheckedCreateWithoutRoomInput> | ReservationCreateWithoutRoomInput[] | ReservationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutRoomInput | ReservationCreateOrConnectWithoutRoomInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutRoomInput | ReservationUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ReservationCreateManyRoomInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutRoomInput | ReservationUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutRoomInput | ReservationUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutPeakSeasonRateInput = {
    create?: XOR<RoomCreateWithoutPeakSeasonRateInput, RoomUncheckedCreateWithoutPeakSeasonRateInput>
    connectOrCreate?: RoomCreateOrConnectWithoutPeakSeasonRateInput
    connect?: RoomWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutPeakSeasonRateNestedInput = {
    create?: XOR<RoomCreateWithoutPeakSeasonRateInput, RoomUncheckedCreateWithoutPeakSeasonRateInput>
    connectOrCreate?: RoomCreateOrConnectWithoutPeakSeasonRateInput
    upsert?: RoomUpsertWithoutPeakSeasonRateInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutPeakSeasonRateInput, RoomUpdateWithoutPeakSeasonRateInput>, RoomUncheckedUpdateWithoutPeakSeasonRateInput>
  }

  export type RoomCreateNestedOneWithoutRoomFacilityInput = {
    create?: XOR<RoomCreateWithoutRoomFacilityInput, RoomUncheckedCreateWithoutRoomFacilityInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoomFacilityInput
    connect?: RoomWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutRoomFacilityNestedInput = {
    create?: XOR<RoomCreateWithoutRoomFacilityInput, RoomUncheckedCreateWithoutRoomFacilityInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoomFacilityInput
    upsert?: RoomUpsertWithoutRoomFacilityInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutRoomFacilityInput, RoomUpdateWithoutRoomFacilityInput>, RoomUncheckedUpdateWithoutRoomFacilityInput>
  }

  export type RoomCreateNestedOneWithoutRoomImageInput = {
    create?: XOR<RoomCreateWithoutRoomImageInput, RoomUncheckedCreateWithoutRoomImageInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoomImageInput
    connect?: RoomWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutRoomImageNestedInput = {
    create?: XOR<RoomCreateWithoutRoomImageInput, RoomUncheckedCreateWithoutRoomImageInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoomImageInput
    upsert?: RoomUpsertWithoutRoomImageInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutRoomImageInput, RoomUpdateWithoutRoomImageInput>, RoomUncheckedUpdateWithoutRoomImageInput>
  }

  export type RoomCreateNestedOneWithoutRoomNonAvailabilityInput = {
    create?: XOR<RoomCreateWithoutRoomNonAvailabilityInput, RoomUncheckedCreateWithoutRoomNonAvailabilityInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoomNonAvailabilityInput
    connect?: RoomWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutRoomNonAvailabilityNestedInput = {
    create?: XOR<RoomCreateWithoutRoomNonAvailabilityInput, RoomUncheckedCreateWithoutRoomNonAvailabilityInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoomNonAvailabilityInput
    upsert?: RoomUpsertWithoutRoomNonAvailabilityInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutRoomNonAvailabilityInput, RoomUpdateWithoutRoomNonAvailabilityInput>, RoomUncheckedUpdateWithoutRoomNonAvailabilityInput>
  }

  export type ReviewCreateNestedManyWithoutPaymentInput = {
    create?: XOR<ReviewCreateWithoutPaymentInput, ReviewUncheckedCreateWithoutPaymentInput> | ReviewCreateWithoutPaymentInput[] | ReviewUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPaymentInput | ReviewCreateOrConnectWithoutPaymentInput[]
    createMany?: ReviewCreateManyPaymentInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPaymentInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    connect?: UserWhereUniqueInput
  }

  export type ReservationCreateNestedManyWithoutPaymentInput = {
    create?: XOR<ReservationCreateWithoutPaymentInput, ReservationUncheckedCreateWithoutPaymentInput> | ReservationCreateWithoutPaymentInput[] | ReservationUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutPaymentInput | ReservationCreateOrConnectWithoutPaymentInput[]
    createMany?: ReservationCreateManyPaymentInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<ReviewCreateWithoutPaymentInput, ReviewUncheckedCreateWithoutPaymentInput> | ReviewCreateWithoutPaymentInput[] | ReviewUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPaymentInput | ReviewCreateOrConnectWithoutPaymentInput[]
    createMany?: ReviewCreateManyPaymentInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<ReservationCreateWithoutPaymentInput, ReservationUncheckedCreateWithoutPaymentInput> | ReservationCreateWithoutPaymentInput[] | ReservationUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutPaymentInput | ReservationCreateOrConnectWithoutPaymentInput[]
    createMany?: ReservationCreateManyPaymentInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type EnumStatusPaymentFieldUpdateOperationsInput = {
    set?: $Enums.StatusPayment
  }

  export type EnumPaymentMethodeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethode
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ReviewUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<ReviewCreateWithoutPaymentInput, ReviewUncheckedCreateWithoutPaymentInput> | ReviewCreateWithoutPaymentInput[] | ReviewUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPaymentInput | ReviewCreateOrConnectWithoutPaymentInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutPaymentInput | ReviewUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: ReviewCreateManyPaymentInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutPaymentInput | ReviewUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutPaymentInput | ReviewUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    upsert?: UserUpsertWithoutPaymentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentInput, UserUpdateWithoutPaymentInput>, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type ReservationUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<ReservationCreateWithoutPaymentInput, ReservationUncheckedCreateWithoutPaymentInput> | ReservationCreateWithoutPaymentInput[] | ReservationUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutPaymentInput | ReservationCreateOrConnectWithoutPaymentInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutPaymentInput | ReservationUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: ReservationCreateManyPaymentInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutPaymentInput | ReservationUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutPaymentInput | ReservationUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<ReviewCreateWithoutPaymentInput, ReviewUncheckedCreateWithoutPaymentInput> | ReviewCreateWithoutPaymentInput[] | ReviewUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPaymentInput | ReviewCreateOrConnectWithoutPaymentInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutPaymentInput | ReviewUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: ReviewCreateManyPaymentInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutPaymentInput | ReviewUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutPaymentInput | ReviewUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<ReservationCreateWithoutPaymentInput, ReservationUncheckedCreateWithoutPaymentInput> | ReservationCreateWithoutPaymentInput[] | ReservationUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutPaymentInput | ReservationCreateOrConnectWithoutPaymentInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutPaymentInput | ReservationUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: ReservationCreateManyPaymentInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutPaymentInput | ReservationUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutPaymentInput | ReservationUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutReservationInput = {
    create?: XOR<RoomCreateWithoutReservationInput, RoomUncheckedCreateWithoutReservationInput>
    connectOrCreate?: RoomCreateOrConnectWithoutReservationInput
    connect?: RoomWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutReservationInput = {
    create?: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutReservationInput
    connect?: PaymentWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutReservationNestedInput = {
    create?: XOR<RoomCreateWithoutReservationInput, RoomUncheckedCreateWithoutReservationInput>
    connectOrCreate?: RoomCreateOrConnectWithoutReservationInput
    upsert?: RoomUpsertWithoutReservationInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutReservationInput, RoomUpdateWithoutReservationInput>, RoomUncheckedUpdateWithoutReservationInput>
  }

  export type PaymentUpdateOneRequiredWithoutReservationNestedInput = {
    create?: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutReservationInput
    upsert?: PaymentUpsertWithoutReservationInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutReservationInput, PaymentUpdateWithoutReservationInput>, PaymentUncheckedUpdateWithoutReservationInput>
  }

  export type UserCreateNestedOneWithoutReviewInput = {
    create?: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyCreateNestedOneWithoutReviewInput = {
    create?: XOR<PropertyCreateWithoutReviewInput, PropertyUncheckedCreateWithoutReviewInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutReviewInput
    connect?: PropertyWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutReviewInput = {
    create?: XOR<PaymentCreateWithoutReviewInput, PaymentUncheckedCreateWithoutReviewInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutReviewInput
    connect?: PaymentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewInput
    upsert?: UserUpsertWithoutReviewInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewInput, UserUpdateWithoutReviewInput>, UserUncheckedUpdateWithoutReviewInput>
  }

  export type PropertyUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<PropertyCreateWithoutReviewInput, PropertyUncheckedCreateWithoutReviewInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutReviewInput
    upsert?: PropertyUpsertWithoutReviewInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutReviewInput, PropertyUpdateWithoutReviewInput>, PropertyUncheckedUpdateWithoutReviewInput>
  }

  export type PaymentUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<PaymentCreateWithoutReviewInput, PaymentUncheckedCreateWithoutReviewInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutReviewInput
    upsert?: PaymentUpsertWithoutReviewInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutReviewInput, PaymentUpdateWithoutReviewInput>, PaymentUncheckedUpdateWithoutReviewInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatusPropertyFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusProperty | EnumStatusPropertyFieldRefInput<$PrismaModel>
    in?: $Enums.StatusProperty[] | ListEnumStatusPropertyFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusProperty[] | ListEnumStatusPropertyFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPropertyFilter<$PrismaModel> | $Enums.StatusProperty
  }

  export type NestedEnumStatusPropertyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusProperty | EnumStatusPropertyFieldRefInput<$PrismaModel>
    in?: $Enums.StatusProperty[] | ListEnumStatusPropertyFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusProperty[] | ListEnumStatusPropertyFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPropertyWithAggregatesFilter<$PrismaModel> | $Enums.StatusProperty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPropertyFilter<$PrismaModel>
    _max?: NestedEnumStatusPropertyFilter<$PrismaModel>
  }

  export type NestedEnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type NestedEnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type NestedEnumStatusPaymentFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPayment | EnumStatusPaymentFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPayment[] | ListEnumStatusPaymentFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPayment[] | ListEnumStatusPaymentFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPaymentFilter<$PrismaModel> | $Enums.StatusPayment
  }

  export type NestedEnumPaymentMethodeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethode | EnumPaymentMethodeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethode[] | ListEnumPaymentMethodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethode[] | ListEnumPaymentMethodeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodeFilter<$PrismaModel> | $Enums.PaymentMethode
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStatusPaymentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPayment | EnumStatusPaymentFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPayment[] | ListEnumStatusPaymentFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPayment[] | ListEnumStatusPaymentFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPaymentWithAggregatesFilter<$PrismaModel> | $Enums.StatusPayment
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPaymentFilter<$PrismaModel>
    _max?: NestedEnumStatusPaymentFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethode | EnumPaymentMethodeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethode[] | ListEnumPaymentMethodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethode[] | ListEnumPaymentMethodeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodeFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ReviewCreateWithoutUserInput = {
    rating?: number
    review: string
    replyMessage?: string | null
    replyDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutReviewInput
    payment: PaymentCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    rating?: number
    review: string
    paymentId: number
    propertyId: number
    replyMessage?: string | null
    replyDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    uuid?: string
    status: $Enums.StatusPayment
    totalPrice: number
    duration: number
    paymentMethode?: $Enums.PaymentMethode
    paymentProof?: string | null
    invoiceUrl?: string | null
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewCreateNestedManyWithoutPaymentInput
    reservation?: ReservationCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: number
    uuid?: string
    status: $Enums.StatusPayment
    totalPrice: number
    duration: number
    paymentMethode?: $Enums.PaymentMethode
    paymentProof?: string | null
    invoiceUrl?: string | null
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedManyWithoutPaymentInput
    reservation?: ReservationUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TenantCreateWithoutUserInput = {
    name: string
    imageUrl?: string | null
    phoneNumber?: string | null
    bankName: string
    bankNumber: string
    balance?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    property?: PropertyCreateNestedManyWithoutTenantInput
    PropertyCategory?: PropertyCategoryCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    imageUrl?: string | null
    phoneNumber?: string | null
    bankName: string
    bankNumber: string
    balance?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    property?: PropertyUncheckedCreateNestedManyWithoutTenantInput
    PropertyCategory?: PropertyCategoryUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutUserInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
  }

  export type TenantCreateManyUserInputEnvelope = {
    data: TenantCreateManyUserInput | TenantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    review?: StringFilter<"Review"> | string
    userId?: IntFilter<"Review"> | number
    paymentId?: IntFilter<"Review"> | number
    propertyId?: IntFilter<"Review"> | number
    replyMessage?: StringNullableFilter<"Review"> | string | null
    replyDate?: DateTimeNullableFilter<"Review"> | Date | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    uuid?: StringFilter<"Payment"> | string
    userId?: IntFilter<"Payment"> | number
    status?: EnumStatusPaymentFilter<"Payment"> | $Enums.StatusPayment
    totalPrice?: IntFilter<"Payment"> | number
    duration?: IntFilter<"Payment"> | number
    paymentMethode?: EnumPaymentMethodeFilter<"Payment"> | $Enums.PaymentMethode
    paymentProof?: StringNullableFilter<"Payment"> | string | null
    invoiceUrl?: StringNullableFilter<"Payment"> | string | null
    expiredAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type TenantUpsertWithWhereUniqueWithoutUserInput = {
    where: TenantWhereUniqueInput
    update: XOR<TenantUpdateWithoutUserInput, TenantUncheckedUpdateWithoutUserInput>
    create: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
  }

  export type TenantUpdateWithWhereUniqueWithoutUserInput = {
    where: TenantWhereUniqueInput
    data: XOR<TenantUpdateWithoutUserInput, TenantUncheckedUpdateWithoutUserInput>
  }

  export type TenantUpdateManyWithWhereWithoutUserInput = {
    where: TenantScalarWhereInput
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyWithoutUserInput>
  }

  export type TenantScalarWhereInput = {
    AND?: TenantScalarWhereInput | TenantScalarWhereInput[]
    OR?: TenantScalarWhereInput[]
    NOT?: TenantScalarWhereInput | TenantScalarWhereInput[]
    id?: IntFilter<"Tenant"> | number
    name?: StringFilter<"Tenant"> | string
    imageUrl?: StringNullableFilter<"Tenant"> | string | null
    phoneNumber?: StringNullableFilter<"Tenant"> | string | null
    bankName?: StringFilter<"Tenant"> | string
    bankNumber?: StringFilter<"Tenant"> | string
    userId?: IntFilter<"Tenant"> | number
    balance?: IntFilter<"Tenant"> | number
    isDeleted?: BoolFilter<"Tenant"> | boolean
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
  }

  export type UserCreateWithoutTenantInput = {
    name: string
    email: string
    password?: string | null
    imageUrl?: string | null
    token?: string | null
    role?: $Enums.Role
    provider?: $Enums.Provider
    isVerified?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewCreateNestedManyWithoutUserInput
    payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTenantInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    imageUrl?: string | null
    token?: string | null
    role?: $Enums.Role
    provider?: $Enums.Provider
    isVerified?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedManyWithoutUserInput
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTenantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type PropertyCreateWithoutTenantInput = {
    slug: string
    title: string
    description: string
    latitude: string
    longitude: string
    status: $Enums.StatusProperty
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    location: string
    propertyImage?: PropertyImageCreateNestedManyWithoutPropertyInput
    propertyFacility?: PropertyFacilityCreateNestedManyWithoutPropertyInput
    room?: RoomCreateNestedManyWithoutPropertyInput
    review?: ReviewCreateNestedManyWithoutPropertyInput
    propertyCategory: PropertyCategoryCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateWithoutTenantInput = {
    id?: number
    slug: string
    title: string
    description: string
    latitude: string
    longitude: string
    status: $Enums.StatusProperty
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    location: string
    propertyCategoryId: number
    propertyImage?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    propertyFacility?: PropertyFacilityUncheckedCreateNestedManyWithoutPropertyInput
    room?: RoomUncheckedCreateNestedManyWithoutPropertyInput
    review?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutTenantInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput>
  }

  export type PropertyCreateManyTenantInputEnvelope = {
    data: PropertyCreateManyTenantInput | PropertyCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type PropertyCategoryCreateWithoutTenantInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutPropertycategoryInput
  }

  export type PropertyCategoryUncheckedCreateWithoutTenantInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutPropertycategoryInput
  }

  export type PropertyCategoryCreateOrConnectWithoutTenantInput = {
    where: PropertyCategoryWhereUniqueInput
    create: XOR<PropertyCategoryCreateWithoutTenantInput, PropertyCategoryUncheckedCreateWithoutTenantInput>
  }

  export type PropertyCategoryCreateManyTenantInputEnvelope = {
    data: PropertyCategoryCreateManyTenantInput | PropertyCategoryCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTenantInput = {
    update: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTenantInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
  }

  export type UserUpdateWithoutTenantInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateManyWithoutUserNestedInput
    payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PropertyUpsertWithWhereUniqueWithoutTenantInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutTenantInput, PropertyUncheckedUpdateWithoutTenantInput>
    create: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutTenantInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutTenantInput, PropertyUncheckedUpdateWithoutTenantInput>
  }

  export type PropertyUpdateManyWithWhereWithoutTenantInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutTenantInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: IntFilter<"Property"> | number
    slug?: StringFilter<"Property"> | string
    title?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    latitude?: StringFilter<"Property"> | string
    longitude?: StringFilter<"Property"> | string
    status?: EnumStatusPropertyFilter<"Property"> | $Enums.StatusProperty
    isDeleted?: BoolFilter<"Property"> | boolean
    tenantId?: IntFilter<"Property"> | number
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    location?: StringFilter<"Property"> | string
    propertyCategoryId?: IntFilter<"Property"> | number
  }

  export type PropertyCategoryUpsertWithWhereUniqueWithoutTenantInput = {
    where: PropertyCategoryWhereUniqueInput
    update: XOR<PropertyCategoryUpdateWithoutTenantInput, PropertyCategoryUncheckedUpdateWithoutTenantInput>
    create: XOR<PropertyCategoryCreateWithoutTenantInput, PropertyCategoryUncheckedCreateWithoutTenantInput>
  }

  export type PropertyCategoryUpdateWithWhereUniqueWithoutTenantInput = {
    where: PropertyCategoryWhereUniqueInput
    data: XOR<PropertyCategoryUpdateWithoutTenantInput, PropertyCategoryUncheckedUpdateWithoutTenantInput>
  }

  export type PropertyCategoryUpdateManyWithWhereWithoutTenantInput = {
    where: PropertyCategoryScalarWhereInput
    data: XOR<PropertyCategoryUpdateManyMutationInput, PropertyCategoryUncheckedUpdateManyWithoutTenantInput>
  }

  export type PropertyCategoryScalarWhereInput = {
    AND?: PropertyCategoryScalarWhereInput | PropertyCategoryScalarWhereInput[]
    OR?: PropertyCategoryScalarWhereInput[]
    NOT?: PropertyCategoryScalarWhereInput | PropertyCategoryScalarWhereInput[]
    id?: IntFilter<"PropertyCategory"> | number
    name?: StringFilter<"PropertyCategory"> | string
    tenantId?: IntFilter<"PropertyCategory"> | number
    createdAt?: DateTimeFilter<"PropertyCategory"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyCategory"> | Date | string
  }

  export type PropertyImageCreateWithoutPropertyInput = {
    imageUrl?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyImageUncheckedCreateWithoutPropertyInput = {
    id?: number
    imageUrl?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyImageCreateOrConnectWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    create: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyImageCreateManyPropertyInputEnvelope = {
    data: PropertyImageCreateManyPropertyInput | PropertyImageCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type PropertyFacilityCreateWithoutPropertyInput = {
    title: string
    description: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyFacilityUncheckedCreateWithoutPropertyInput = {
    id?: number
    title: string
    description: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyFacilityCreateOrConnectWithoutPropertyInput = {
    where: PropertyFacilityWhereUniqueInput
    create: XOR<PropertyFacilityCreateWithoutPropertyInput, PropertyFacilityUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyFacilityCreateManyPropertyInputEnvelope = {
    data: PropertyFacilityCreateManyPropertyInput | PropertyFacilityCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type RoomCreateWithoutPropertyInput = {
    type: $Enums.Type
    stock: number
    price: number
    guest: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    peakSeasonRate?: PeakSeasonRateCreateNestedManyWithoutRoomInput
    roomFacility?: RoomFacilityCreateNestedManyWithoutRoomInput
    roomImage?: RoomImageCreateNestedManyWithoutRoomInput
    roomNonAvailability?: RoomNonAvailabilityCreateNestedManyWithoutRoomInput
    reservation?: ReservationCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutPropertyInput = {
    id?: number
    type: $Enums.Type
    stock: number
    price: number
    guest: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    peakSeasonRate?: PeakSeasonRateUncheckedCreateNestedManyWithoutRoomInput
    roomFacility?: RoomFacilityUncheckedCreateNestedManyWithoutRoomInput
    roomImage?: RoomImageUncheckedCreateNestedManyWithoutRoomInput
    roomNonAvailability?: RoomNonAvailabilityUncheckedCreateNestedManyWithoutRoomInput
    reservation?: ReservationUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutPropertyInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput>
  }

  export type RoomCreateManyPropertyInputEnvelope = {
    data: RoomCreateManyPropertyInput | RoomCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type TenantCreateWithoutPropertyInput = {
    name: string
    imageUrl?: string | null
    phoneNumber?: string | null
    bankName: string
    bankNumber: string
    balance?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTenantInput
    PropertyCategory?: PropertyCategoryCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutPropertyInput = {
    id?: number
    name: string
    imageUrl?: string | null
    phoneNumber?: string | null
    bankName: string
    bankNumber: string
    userId: number
    balance?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    PropertyCategory?: PropertyCategoryUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutPropertyInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutPropertyInput, TenantUncheckedCreateWithoutPropertyInput>
  }

  export type ReviewCreateWithoutPropertyInput = {
    rating?: number
    review: string
    replyMessage?: string | null
    replyDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewInput
    payment: PaymentCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutPropertyInput = {
    id?: number
    rating?: number
    review: string
    userId: number
    paymentId: number
    replyMessage?: string | null
    replyDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutPropertyInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput>
  }

  export type ReviewCreateManyPropertyInputEnvelope = {
    data: ReviewCreateManyPropertyInput | ReviewCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type PropertyCategoryCreateWithoutPropertiesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPropertyCategoryInput
  }

  export type PropertyCategoryUncheckedCreateWithoutPropertiesInput = {
    id?: number
    name: string
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyCategoryCreateOrConnectWithoutPropertiesInput = {
    where: PropertyCategoryWhereUniqueInput
    create: XOR<PropertyCategoryCreateWithoutPropertiesInput, PropertyCategoryUncheckedCreateWithoutPropertiesInput>
  }

  export type PropertyImageUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    update: XOR<PropertyImageUpdateWithoutPropertyInput, PropertyImageUncheckedUpdateWithoutPropertyInput>
    create: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyImageUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    data: XOR<PropertyImageUpdateWithoutPropertyInput, PropertyImageUncheckedUpdateWithoutPropertyInput>
  }

  export type PropertyImageUpdateManyWithWhereWithoutPropertyInput = {
    where: PropertyImageScalarWhereInput
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyImageScalarWhereInput = {
    AND?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
    OR?: PropertyImageScalarWhereInput[]
    NOT?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
    id?: IntFilter<"PropertyImage"> | number
    imageUrl?: StringNullableFilter<"PropertyImage"> | string | null
    isDeleted?: BoolFilter<"PropertyImage"> | boolean
    propertyId?: IntFilter<"PropertyImage"> | number
    createdAt?: DateTimeFilter<"PropertyImage"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyImage"> | Date | string
  }

  export type PropertyFacilityUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PropertyFacilityWhereUniqueInput
    update: XOR<PropertyFacilityUpdateWithoutPropertyInput, PropertyFacilityUncheckedUpdateWithoutPropertyInput>
    create: XOR<PropertyFacilityCreateWithoutPropertyInput, PropertyFacilityUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyFacilityUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PropertyFacilityWhereUniqueInput
    data: XOR<PropertyFacilityUpdateWithoutPropertyInput, PropertyFacilityUncheckedUpdateWithoutPropertyInput>
  }

  export type PropertyFacilityUpdateManyWithWhereWithoutPropertyInput = {
    where: PropertyFacilityScalarWhereInput
    data: XOR<PropertyFacilityUpdateManyMutationInput, PropertyFacilityUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyFacilityScalarWhereInput = {
    AND?: PropertyFacilityScalarWhereInput | PropertyFacilityScalarWhereInput[]
    OR?: PropertyFacilityScalarWhereInput[]
    NOT?: PropertyFacilityScalarWhereInput | PropertyFacilityScalarWhereInput[]
    id?: IntFilter<"PropertyFacility"> | number
    title?: StringFilter<"PropertyFacility"> | string
    description?: StringFilter<"PropertyFacility"> | string
    isDeleted?: BoolFilter<"PropertyFacility"> | boolean
    propertyId?: IntFilter<"PropertyFacility"> | number
    createdAt?: DateTimeFilter<"PropertyFacility"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyFacility"> | Date | string
  }

  export type RoomUpsertWithWhereUniqueWithoutPropertyInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutPropertyInput, RoomUncheckedUpdateWithoutPropertyInput>
    create: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutPropertyInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutPropertyInput, RoomUncheckedUpdateWithoutPropertyInput>
  }

  export type RoomUpdateManyWithWhereWithoutPropertyInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutPropertyInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: IntFilter<"Room"> | number
    type?: EnumTypeFilter<"Room"> | $Enums.Type
    stock?: IntFilter<"Room"> | number
    price?: IntFilter<"Room"> | number
    guest?: IntFilter<"Room"> | number
    isDeleted?: BoolFilter<"Room"> | boolean
    propertyId?: IntFilter<"Room"> | number
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
  }

  export type TenantUpsertWithoutPropertyInput = {
    update: XOR<TenantUpdateWithoutPropertyInput, TenantUncheckedUpdateWithoutPropertyInput>
    create: XOR<TenantCreateWithoutPropertyInput, TenantUncheckedCreateWithoutPropertyInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutPropertyInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutPropertyInput, TenantUncheckedUpdateWithoutPropertyInput>
  }

  export type TenantUpdateWithoutPropertyInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: StringFieldUpdateOperationsInput | string
    bankNumber?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTenantNestedInput
    PropertyCategory?: PropertyCategoryUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: StringFieldUpdateOperationsInput | string
    bankNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PropertyCategory?: PropertyCategoryUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutPropertyInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutPropertyInput, ReviewUncheckedUpdateWithoutPropertyInput>
    create: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutPropertyInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutPropertyInput, ReviewUncheckedUpdateWithoutPropertyInput>
  }

  export type ReviewUpdateManyWithWhereWithoutPropertyInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyCategoryUpsertWithoutPropertiesInput = {
    update: XOR<PropertyCategoryUpdateWithoutPropertiesInput, PropertyCategoryUncheckedUpdateWithoutPropertiesInput>
    create: XOR<PropertyCategoryCreateWithoutPropertiesInput, PropertyCategoryUncheckedCreateWithoutPropertiesInput>
    where?: PropertyCategoryWhereInput
  }

  export type PropertyCategoryUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: PropertyCategoryWhereInput
    data: XOR<PropertyCategoryUpdateWithoutPropertiesInput, PropertyCategoryUncheckedUpdateWithoutPropertiesInput>
  }

  export type PropertyCategoryUpdateWithoutPropertiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPropertyCategoryNestedInput
  }

  export type PropertyCategoryUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCategoryUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateWithoutPropertycategoryInput = {
    slug: string
    title: string
    description: string
    latitude: string
    longitude: string
    status: $Enums.StatusProperty
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    location: string
    propertyImage?: PropertyImageCreateNestedManyWithoutPropertyInput
    propertyFacility?: PropertyFacilityCreateNestedManyWithoutPropertyInput
    room?: RoomCreateNestedManyWithoutPropertyInput
    tenant: TenantCreateNestedOneWithoutPropertyInput
    review?: ReviewCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutPropertycategoryInput = {
    id?: number
    slug: string
    title: string
    description: string
    latitude: string
    longitude: string
    status: $Enums.StatusProperty
    isDeleted?: boolean
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    location: string
    propertyImage?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    propertyFacility?: PropertyFacilityUncheckedCreateNestedManyWithoutPropertyInput
    room?: RoomUncheckedCreateNestedManyWithoutPropertyInput
    review?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutPropertycategoryInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutPropertycategoryInput, PropertyUncheckedCreateWithoutPropertycategoryInput>
  }

  export type PropertyCreateManyPropertycategoryInputEnvelope = {
    data: PropertyCreateManyPropertycategoryInput | PropertyCreateManyPropertycategoryInput[]
    skipDuplicates?: boolean
  }

  export type PropertyCreateManyPropertyCategoryInputEnvelope = {
    data: PropertyCreateManyPropertyCategoryInput | PropertyCreateManyPropertyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type TenantCreateWithoutPropertyCategoryInput = {
    name: string
    imageUrl?: string | null
    phoneNumber?: string | null
    bankName: string
    bankNumber: string
    balance?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTenantInput
    property?: PropertyCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutPropertyCategoryInput = {
    id?: number
    name: string
    imageUrl?: string | null
    phoneNumber?: string | null
    bankName: string
    bankNumber: string
    userId: number
    balance?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    property?: PropertyUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutPropertyCategoryInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutPropertyCategoryInput, TenantUncheckedCreateWithoutPropertyCategoryInput>
  }

  export type PropertyUpsertWithWhereUniqueWithoutPropertycategoryInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutPropertycategoryInput, PropertyUncheckedUpdateWithoutPropertycategoryInput>
    create: XOR<PropertyCreateWithoutPropertycategoryInput, PropertyUncheckedCreateWithoutPropertycategoryInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutPropertycategoryInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutPropertycategoryInput, PropertyUncheckedUpdateWithoutPropertycategoryInput>
  }

  export type PropertyUpdateManyWithWhereWithoutPropertycategoryInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutPropertycategoryInput>
  }

  export type TenantUpsertWithoutPropertyCategoryInput = {
    update: XOR<TenantUpdateWithoutPropertyCategoryInput, TenantUncheckedUpdateWithoutPropertyCategoryInput>
    create: XOR<TenantCreateWithoutPropertyCategoryInput, TenantUncheckedCreateWithoutPropertyCategoryInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutPropertyCategoryInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutPropertyCategoryInput, TenantUncheckedUpdateWithoutPropertyCategoryInput>
  }

  export type TenantUpdateWithoutPropertyCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: StringFieldUpdateOperationsInput | string
    bankNumber?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTenantNestedInput
    property?: PropertyUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutPropertyCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: StringFieldUpdateOperationsInput | string
    bankNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type PropertyCreateWithoutPropertyImageInput = {
    slug: string
    title: string
    description: string
    latitude: string
    longitude: string
    status: $Enums.StatusProperty
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    location: string
    propertyFacility?: PropertyFacilityCreateNestedManyWithoutPropertyInput
    room?: RoomCreateNestedManyWithoutPropertyInput
    tenant: TenantCreateNestedOneWithoutPropertyInput
    review?: ReviewCreateNestedManyWithoutPropertyInput
    propertyCategory: PropertyCategoryCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateWithoutPropertyImageInput = {
    id?: number
    slug: string
    title: string
    description: string
    latitude: string
    longitude: string
    status: $Enums.StatusProperty
    isDeleted?: boolean
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    location: string
    propertyCategoryId: number
    propertyFacility?: PropertyFacilityUncheckedCreateNestedManyWithoutPropertyInput
    room?: RoomUncheckedCreateNestedManyWithoutPropertyInput
    review?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutPropertyImageInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutPropertyImageInput, PropertyUncheckedCreateWithoutPropertyImageInput>
  }

  export type PropertyUpsertWithoutPropertyImageInput = {
    update: XOR<PropertyUpdateWithoutPropertyImageInput, PropertyUncheckedUpdateWithoutPropertyImageInput>
    create: XOR<PropertyCreateWithoutPropertyImageInput, PropertyUncheckedCreateWithoutPropertyImageInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutPropertyImageInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutPropertyImageInput, PropertyUncheckedUpdateWithoutPropertyImageInput>
  }

  export type PropertyUpdateWithoutPropertyImageInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPropertyFieldUpdateOperationsInput | $Enums.StatusProperty
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    propertyFacility?: PropertyFacilityUpdateManyWithoutPropertyNestedInput
    room?: RoomUpdateManyWithoutPropertyNestedInput
    tenant?: TenantUpdateOneRequiredWithoutPropertyNestedInput
    review?: ReviewUpdateManyWithoutPropertyNestedInput
    propertyCategory?: PropertyCategoryUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateWithoutPropertyImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPropertyFieldUpdateOperationsInput | $Enums.StatusProperty
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    propertyCategoryId?: IntFieldUpdateOperationsInput | number
    propertyFacility?: PropertyFacilityUncheckedUpdateManyWithoutPropertyNestedInput
    room?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
    review?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateWithoutPropertyFacilityInput = {
    slug: string
    title: string
    description: string
    latitude: string
    longitude: string
    status: $Enums.StatusProperty
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    location: string
    propertyImage?: PropertyImageCreateNestedManyWithoutPropertyInput
    room?: RoomCreateNestedManyWithoutPropertyInput
    tenant: TenantCreateNestedOneWithoutPropertyInput
    review?: ReviewCreateNestedManyWithoutPropertyInput
    propertyCategory: PropertyCategoryCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateWithoutPropertyFacilityInput = {
    id?: number
    slug: string
    title: string
    description: string
    latitude: string
    longitude: string
    status: $Enums.StatusProperty
    isDeleted?: boolean
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    location: string
    propertyCategoryId: number
    propertyImage?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    room?: RoomUncheckedCreateNestedManyWithoutPropertyInput
    review?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutPropertyFacilityInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutPropertyFacilityInput, PropertyUncheckedCreateWithoutPropertyFacilityInput>
  }

  export type PropertyUpsertWithoutPropertyFacilityInput = {
    update: XOR<PropertyUpdateWithoutPropertyFacilityInput, PropertyUncheckedUpdateWithoutPropertyFacilityInput>
    create: XOR<PropertyCreateWithoutPropertyFacilityInput, PropertyUncheckedCreateWithoutPropertyFacilityInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutPropertyFacilityInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutPropertyFacilityInput, PropertyUncheckedUpdateWithoutPropertyFacilityInput>
  }

  export type PropertyUpdateWithoutPropertyFacilityInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPropertyFieldUpdateOperationsInput | $Enums.StatusProperty
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    propertyImage?: PropertyImageUpdateManyWithoutPropertyNestedInput
    room?: RoomUpdateManyWithoutPropertyNestedInput
    tenant?: TenantUpdateOneRequiredWithoutPropertyNestedInput
    review?: ReviewUpdateManyWithoutPropertyNestedInput
    propertyCategory?: PropertyCategoryUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateWithoutPropertyFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPropertyFieldUpdateOperationsInput | $Enums.StatusProperty
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    propertyCategoryId?: IntFieldUpdateOperationsInput | number
    propertyImage?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    room?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
    review?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PeakSeasonRateCreateWithoutRoomInput = {
    price: number
    startDate: Date | string
    endDate: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeakSeasonRateUncheckedCreateWithoutRoomInput = {
    id?: number
    price: number
    startDate: Date | string
    endDate: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeakSeasonRateCreateOrConnectWithoutRoomInput = {
    where: PeakSeasonRateWhereUniqueInput
    create: XOR<PeakSeasonRateCreateWithoutRoomInput, PeakSeasonRateUncheckedCreateWithoutRoomInput>
  }

  export type PeakSeasonRateCreateManyRoomInputEnvelope = {
    data: PeakSeasonRateCreateManyRoomInput | PeakSeasonRateCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomFacilityCreateWithoutRoomInput = {
    title: string
    description: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomFacilityUncheckedCreateWithoutRoomInput = {
    id?: number
    title: string
    description: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomFacilityCreateOrConnectWithoutRoomInput = {
    where: RoomFacilityWhereUniqueInput
    create: XOR<RoomFacilityCreateWithoutRoomInput, RoomFacilityUncheckedCreateWithoutRoomInput>
  }

  export type RoomFacilityCreateManyRoomInputEnvelope = {
    data: RoomFacilityCreateManyRoomInput | RoomFacilityCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomImageCreateWithoutRoomInput = {
    imageUrl?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomImageUncheckedCreateWithoutRoomInput = {
    id?: number
    imageUrl?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomImageCreateOrConnectWithoutRoomInput = {
    where: RoomImageWhereUniqueInput
    create: XOR<RoomImageCreateWithoutRoomInput, RoomImageUncheckedCreateWithoutRoomInput>
  }

  export type RoomImageCreateManyRoomInputEnvelope = {
    data: RoomImageCreateManyRoomInput | RoomImageCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomNonAvailabilityCreateWithoutRoomInput = {
    startDate: Date | string
    endDate: Date | string
    isDeleted?: boolean
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomNonAvailabilityUncheckedCreateWithoutRoomInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    isDeleted?: boolean
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomNonAvailabilityCreateOrConnectWithoutRoomInput = {
    where: RoomNonAvailabilityWhereUniqueInput
    create: XOR<RoomNonAvailabilityCreateWithoutRoomInput, RoomNonAvailabilityUncheckedCreateWithoutRoomInput>
  }

  export type RoomNonAvailabilityCreateManyRoomInputEnvelope = {
    data: RoomNonAvailabilityCreateManyRoomInput | RoomNonAvailabilityCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type PropertyCreateWithoutRoomInput = {
    slug: string
    title: string
    description: string
    latitude: string
    longitude: string
    status: $Enums.StatusProperty
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    location: string
    propertyImage?: PropertyImageCreateNestedManyWithoutPropertyInput
    propertyFacility?: PropertyFacilityCreateNestedManyWithoutPropertyInput
    tenant: TenantCreateNestedOneWithoutPropertyInput
    review?: ReviewCreateNestedManyWithoutPropertyInput
    propertyCategory: PropertyCategoryCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateWithoutRoomInput = {
    id?: number
    slug: string
    title: string
    description: string
    latitude: string
    longitude: string
    status: $Enums.StatusProperty
    isDeleted?: boolean
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    location: string
    propertyCategoryId: number
    propertyImage?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    propertyFacility?: PropertyFacilityUncheckedCreateNestedManyWithoutPropertyInput
    review?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutRoomInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutRoomInput, PropertyUncheckedCreateWithoutRoomInput>
  }

  export type ReservationCreateWithoutRoomInput = {
    uuid?: string
    price: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    payment: PaymentCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutRoomInput = {
    id?: number
    uuid?: string
    paymentId: number
    price: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationCreateOrConnectWithoutRoomInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutRoomInput, ReservationUncheckedCreateWithoutRoomInput>
  }

  export type ReservationCreateManyRoomInputEnvelope = {
    data: ReservationCreateManyRoomInput | ReservationCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type PeakSeasonRateUpsertWithWhereUniqueWithoutRoomInput = {
    where: PeakSeasonRateWhereUniqueInput
    update: XOR<PeakSeasonRateUpdateWithoutRoomInput, PeakSeasonRateUncheckedUpdateWithoutRoomInput>
    create: XOR<PeakSeasonRateCreateWithoutRoomInput, PeakSeasonRateUncheckedCreateWithoutRoomInput>
  }

  export type PeakSeasonRateUpdateWithWhereUniqueWithoutRoomInput = {
    where: PeakSeasonRateWhereUniqueInput
    data: XOR<PeakSeasonRateUpdateWithoutRoomInput, PeakSeasonRateUncheckedUpdateWithoutRoomInput>
  }

  export type PeakSeasonRateUpdateManyWithWhereWithoutRoomInput = {
    where: PeakSeasonRateScalarWhereInput
    data: XOR<PeakSeasonRateUpdateManyMutationInput, PeakSeasonRateUncheckedUpdateManyWithoutRoomInput>
  }

  export type PeakSeasonRateScalarWhereInput = {
    AND?: PeakSeasonRateScalarWhereInput | PeakSeasonRateScalarWhereInput[]
    OR?: PeakSeasonRateScalarWhereInput[]
    NOT?: PeakSeasonRateScalarWhereInput | PeakSeasonRateScalarWhereInput[]
    id?: IntFilter<"PeakSeasonRate"> | number
    price?: IntFilter<"PeakSeasonRate"> | number
    startDate?: DateTimeFilter<"PeakSeasonRate"> | Date | string
    endDate?: DateTimeFilter<"PeakSeasonRate"> | Date | string
    isDeleted?: BoolFilter<"PeakSeasonRate"> | boolean
    roomId?: IntFilter<"PeakSeasonRate"> | number
    createdAt?: DateTimeFilter<"PeakSeasonRate"> | Date | string
    updatedAt?: DateTimeFilter<"PeakSeasonRate"> | Date | string
  }

  export type RoomFacilityUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomFacilityWhereUniqueInput
    update: XOR<RoomFacilityUpdateWithoutRoomInput, RoomFacilityUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomFacilityCreateWithoutRoomInput, RoomFacilityUncheckedCreateWithoutRoomInput>
  }

  export type RoomFacilityUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomFacilityWhereUniqueInput
    data: XOR<RoomFacilityUpdateWithoutRoomInput, RoomFacilityUncheckedUpdateWithoutRoomInput>
  }

  export type RoomFacilityUpdateManyWithWhereWithoutRoomInput = {
    where: RoomFacilityScalarWhereInput
    data: XOR<RoomFacilityUpdateManyMutationInput, RoomFacilityUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomFacilityScalarWhereInput = {
    AND?: RoomFacilityScalarWhereInput | RoomFacilityScalarWhereInput[]
    OR?: RoomFacilityScalarWhereInput[]
    NOT?: RoomFacilityScalarWhereInput | RoomFacilityScalarWhereInput[]
    id?: IntFilter<"RoomFacility"> | number
    title?: StringFilter<"RoomFacility"> | string
    description?: StringFilter<"RoomFacility"> | string
    isDeleted?: BoolFilter<"RoomFacility"> | boolean
    roomId?: IntFilter<"RoomFacility"> | number
    createdAt?: DateTimeFilter<"RoomFacility"> | Date | string
    updatedAt?: DateTimeFilter<"RoomFacility"> | Date | string
  }

  export type RoomImageUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomImageWhereUniqueInput
    update: XOR<RoomImageUpdateWithoutRoomInput, RoomImageUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomImageCreateWithoutRoomInput, RoomImageUncheckedCreateWithoutRoomInput>
  }

  export type RoomImageUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomImageWhereUniqueInput
    data: XOR<RoomImageUpdateWithoutRoomInput, RoomImageUncheckedUpdateWithoutRoomInput>
  }

  export type RoomImageUpdateManyWithWhereWithoutRoomInput = {
    where: RoomImageScalarWhereInput
    data: XOR<RoomImageUpdateManyMutationInput, RoomImageUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomImageScalarWhereInput = {
    AND?: RoomImageScalarWhereInput | RoomImageScalarWhereInput[]
    OR?: RoomImageScalarWhereInput[]
    NOT?: RoomImageScalarWhereInput | RoomImageScalarWhereInput[]
    id?: IntFilter<"RoomImage"> | number
    imageUrl?: StringNullableFilter<"RoomImage"> | string | null
    isDeleted?: BoolFilter<"RoomImage"> | boolean
    roomId?: IntFilter<"RoomImage"> | number
    createdAt?: DateTimeFilter<"RoomImage"> | Date | string
    updatedAt?: DateTimeFilter<"RoomImage"> | Date | string
  }

  export type RoomNonAvailabilityUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomNonAvailabilityWhereUniqueInput
    update: XOR<RoomNonAvailabilityUpdateWithoutRoomInput, RoomNonAvailabilityUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomNonAvailabilityCreateWithoutRoomInput, RoomNonAvailabilityUncheckedCreateWithoutRoomInput>
  }

  export type RoomNonAvailabilityUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomNonAvailabilityWhereUniqueInput
    data: XOR<RoomNonAvailabilityUpdateWithoutRoomInput, RoomNonAvailabilityUncheckedUpdateWithoutRoomInput>
  }

  export type RoomNonAvailabilityUpdateManyWithWhereWithoutRoomInput = {
    where: RoomNonAvailabilityScalarWhereInput
    data: XOR<RoomNonAvailabilityUpdateManyMutationInput, RoomNonAvailabilityUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomNonAvailabilityScalarWhereInput = {
    AND?: RoomNonAvailabilityScalarWhereInput | RoomNonAvailabilityScalarWhereInput[]
    OR?: RoomNonAvailabilityScalarWhereInput[]
    NOT?: RoomNonAvailabilityScalarWhereInput | RoomNonAvailabilityScalarWhereInput[]
    id?: IntFilter<"RoomNonAvailability"> | number
    startDate?: DateTimeFilter<"RoomNonAvailability"> | Date | string
    endDate?: DateTimeFilter<"RoomNonAvailability"> | Date | string
    isDeleted?: BoolFilter<"RoomNonAvailability"> | boolean
    reason?: StringNullableFilter<"RoomNonAvailability"> | string | null
    roomId?: IntFilter<"RoomNonAvailability"> | number
    createdAt?: DateTimeFilter<"RoomNonAvailability"> | Date | string
    updatedAt?: DateTimeFilter<"RoomNonAvailability"> | Date | string
  }

  export type PropertyUpsertWithoutRoomInput = {
    update: XOR<PropertyUpdateWithoutRoomInput, PropertyUncheckedUpdateWithoutRoomInput>
    create: XOR<PropertyCreateWithoutRoomInput, PropertyUncheckedCreateWithoutRoomInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutRoomInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutRoomInput, PropertyUncheckedUpdateWithoutRoomInput>
  }

  export type PropertyUpdateWithoutRoomInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPropertyFieldUpdateOperationsInput | $Enums.StatusProperty
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    propertyImage?: PropertyImageUpdateManyWithoutPropertyNestedInput
    propertyFacility?: PropertyFacilityUpdateManyWithoutPropertyNestedInput
    tenant?: TenantUpdateOneRequiredWithoutPropertyNestedInput
    review?: ReviewUpdateManyWithoutPropertyNestedInput
    propertyCategory?: PropertyCategoryUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPropertyFieldUpdateOperationsInput | $Enums.StatusProperty
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    propertyCategoryId?: IntFieldUpdateOperationsInput | number
    propertyImage?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    propertyFacility?: PropertyFacilityUncheckedUpdateManyWithoutPropertyNestedInput
    review?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type ReservationUpsertWithWhereUniqueWithoutRoomInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutRoomInput, ReservationUncheckedUpdateWithoutRoomInput>
    create: XOR<ReservationCreateWithoutRoomInput, ReservationUncheckedCreateWithoutRoomInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutRoomInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutRoomInput, ReservationUncheckedUpdateWithoutRoomInput>
  }

  export type ReservationUpdateManyWithWhereWithoutRoomInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutRoomInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    id?: IntFilter<"Reservation"> | number
    uuid?: StringFilter<"Reservation"> | string
    roomId?: IntFilter<"Reservation"> | number
    paymentId?: IntFilter<"Reservation"> | number
    price?: IntFilter<"Reservation"> | number
    startDate?: DateTimeFilter<"Reservation"> | Date | string
    endDate?: DateTimeFilter<"Reservation"> | Date | string
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
  }

  export type RoomCreateWithoutPeakSeasonRateInput = {
    type: $Enums.Type
    stock: number
    price: number
    guest: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roomFacility?: RoomFacilityCreateNestedManyWithoutRoomInput
    roomImage?: RoomImageCreateNestedManyWithoutRoomInput
    roomNonAvailability?: RoomNonAvailabilityCreateNestedManyWithoutRoomInput
    property: PropertyCreateNestedOneWithoutRoomInput
    reservation?: ReservationCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutPeakSeasonRateInput = {
    id?: number
    type: $Enums.Type
    stock: number
    price: number
    guest: number
    isDeleted?: boolean
    propertyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roomFacility?: RoomFacilityUncheckedCreateNestedManyWithoutRoomInput
    roomImage?: RoomImageUncheckedCreateNestedManyWithoutRoomInput
    roomNonAvailability?: RoomNonAvailabilityUncheckedCreateNestedManyWithoutRoomInput
    reservation?: ReservationUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutPeakSeasonRateInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutPeakSeasonRateInput, RoomUncheckedCreateWithoutPeakSeasonRateInput>
  }

  export type RoomUpsertWithoutPeakSeasonRateInput = {
    update: XOR<RoomUpdateWithoutPeakSeasonRateInput, RoomUncheckedUpdateWithoutPeakSeasonRateInput>
    create: XOR<RoomCreateWithoutPeakSeasonRateInput, RoomUncheckedCreateWithoutPeakSeasonRateInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutPeakSeasonRateInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutPeakSeasonRateInput, RoomUncheckedUpdateWithoutPeakSeasonRateInput>
  }

  export type RoomUpdateWithoutPeakSeasonRateInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    guest?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomFacility?: RoomFacilityUpdateManyWithoutRoomNestedInput
    roomImage?: RoomImageUpdateManyWithoutRoomNestedInput
    roomNonAvailability?: RoomNonAvailabilityUpdateManyWithoutRoomNestedInput
    property?: PropertyUpdateOneRequiredWithoutRoomNestedInput
    reservation?: ReservationUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutPeakSeasonRateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    guest?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    propertyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomFacility?: RoomFacilityUncheckedUpdateManyWithoutRoomNestedInput
    roomImage?: RoomImageUncheckedUpdateManyWithoutRoomNestedInput
    roomNonAvailability?: RoomNonAvailabilityUncheckedUpdateManyWithoutRoomNestedInput
    reservation?: ReservationUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateWithoutRoomFacilityInput = {
    type: $Enums.Type
    stock: number
    price: number
    guest: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    peakSeasonRate?: PeakSeasonRateCreateNestedManyWithoutRoomInput
    roomImage?: RoomImageCreateNestedManyWithoutRoomInput
    roomNonAvailability?: RoomNonAvailabilityCreateNestedManyWithoutRoomInput
    property: PropertyCreateNestedOneWithoutRoomInput
    reservation?: ReservationCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutRoomFacilityInput = {
    id?: number
    type: $Enums.Type
    stock: number
    price: number
    guest: number
    isDeleted?: boolean
    propertyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    peakSeasonRate?: PeakSeasonRateUncheckedCreateNestedManyWithoutRoomInput
    roomImage?: RoomImageUncheckedCreateNestedManyWithoutRoomInput
    roomNonAvailability?: RoomNonAvailabilityUncheckedCreateNestedManyWithoutRoomInput
    reservation?: ReservationUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutRoomFacilityInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutRoomFacilityInput, RoomUncheckedCreateWithoutRoomFacilityInput>
  }

  export type RoomUpsertWithoutRoomFacilityInput = {
    update: XOR<RoomUpdateWithoutRoomFacilityInput, RoomUncheckedUpdateWithoutRoomFacilityInput>
    create: XOR<RoomCreateWithoutRoomFacilityInput, RoomUncheckedCreateWithoutRoomFacilityInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutRoomFacilityInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutRoomFacilityInput, RoomUncheckedUpdateWithoutRoomFacilityInput>
  }

  export type RoomUpdateWithoutRoomFacilityInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    guest?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peakSeasonRate?: PeakSeasonRateUpdateManyWithoutRoomNestedInput
    roomImage?: RoomImageUpdateManyWithoutRoomNestedInput
    roomNonAvailability?: RoomNonAvailabilityUpdateManyWithoutRoomNestedInput
    property?: PropertyUpdateOneRequiredWithoutRoomNestedInput
    reservation?: ReservationUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutRoomFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    guest?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    propertyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peakSeasonRate?: PeakSeasonRateUncheckedUpdateManyWithoutRoomNestedInput
    roomImage?: RoomImageUncheckedUpdateManyWithoutRoomNestedInput
    roomNonAvailability?: RoomNonAvailabilityUncheckedUpdateManyWithoutRoomNestedInput
    reservation?: ReservationUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateWithoutRoomImageInput = {
    type: $Enums.Type
    stock: number
    price: number
    guest: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    peakSeasonRate?: PeakSeasonRateCreateNestedManyWithoutRoomInput
    roomFacility?: RoomFacilityCreateNestedManyWithoutRoomInput
    roomNonAvailability?: RoomNonAvailabilityCreateNestedManyWithoutRoomInput
    property: PropertyCreateNestedOneWithoutRoomInput
    reservation?: ReservationCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutRoomImageInput = {
    id?: number
    type: $Enums.Type
    stock: number
    price: number
    guest: number
    isDeleted?: boolean
    propertyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    peakSeasonRate?: PeakSeasonRateUncheckedCreateNestedManyWithoutRoomInput
    roomFacility?: RoomFacilityUncheckedCreateNestedManyWithoutRoomInput
    roomNonAvailability?: RoomNonAvailabilityUncheckedCreateNestedManyWithoutRoomInput
    reservation?: ReservationUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutRoomImageInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutRoomImageInput, RoomUncheckedCreateWithoutRoomImageInput>
  }

  export type RoomUpsertWithoutRoomImageInput = {
    update: XOR<RoomUpdateWithoutRoomImageInput, RoomUncheckedUpdateWithoutRoomImageInput>
    create: XOR<RoomCreateWithoutRoomImageInput, RoomUncheckedCreateWithoutRoomImageInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutRoomImageInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutRoomImageInput, RoomUncheckedUpdateWithoutRoomImageInput>
  }

  export type RoomUpdateWithoutRoomImageInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    guest?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peakSeasonRate?: PeakSeasonRateUpdateManyWithoutRoomNestedInput
    roomFacility?: RoomFacilityUpdateManyWithoutRoomNestedInput
    roomNonAvailability?: RoomNonAvailabilityUpdateManyWithoutRoomNestedInput
    property?: PropertyUpdateOneRequiredWithoutRoomNestedInput
    reservation?: ReservationUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutRoomImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    guest?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    propertyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peakSeasonRate?: PeakSeasonRateUncheckedUpdateManyWithoutRoomNestedInput
    roomFacility?: RoomFacilityUncheckedUpdateManyWithoutRoomNestedInput
    roomNonAvailability?: RoomNonAvailabilityUncheckedUpdateManyWithoutRoomNestedInput
    reservation?: ReservationUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateWithoutRoomNonAvailabilityInput = {
    type: $Enums.Type
    stock: number
    price: number
    guest: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    peakSeasonRate?: PeakSeasonRateCreateNestedManyWithoutRoomInput
    roomFacility?: RoomFacilityCreateNestedManyWithoutRoomInput
    roomImage?: RoomImageCreateNestedManyWithoutRoomInput
    property: PropertyCreateNestedOneWithoutRoomInput
    reservation?: ReservationCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutRoomNonAvailabilityInput = {
    id?: number
    type: $Enums.Type
    stock: number
    price: number
    guest: number
    isDeleted?: boolean
    propertyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    peakSeasonRate?: PeakSeasonRateUncheckedCreateNestedManyWithoutRoomInput
    roomFacility?: RoomFacilityUncheckedCreateNestedManyWithoutRoomInput
    roomImage?: RoomImageUncheckedCreateNestedManyWithoutRoomInput
    reservation?: ReservationUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutRoomNonAvailabilityInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutRoomNonAvailabilityInput, RoomUncheckedCreateWithoutRoomNonAvailabilityInput>
  }

  export type RoomUpsertWithoutRoomNonAvailabilityInput = {
    update: XOR<RoomUpdateWithoutRoomNonAvailabilityInput, RoomUncheckedUpdateWithoutRoomNonAvailabilityInput>
    create: XOR<RoomCreateWithoutRoomNonAvailabilityInput, RoomUncheckedCreateWithoutRoomNonAvailabilityInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutRoomNonAvailabilityInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutRoomNonAvailabilityInput, RoomUncheckedUpdateWithoutRoomNonAvailabilityInput>
  }

  export type RoomUpdateWithoutRoomNonAvailabilityInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    guest?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peakSeasonRate?: PeakSeasonRateUpdateManyWithoutRoomNestedInput
    roomFacility?: RoomFacilityUpdateManyWithoutRoomNestedInput
    roomImage?: RoomImageUpdateManyWithoutRoomNestedInput
    property?: PropertyUpdateOneRequiredWithoutRoomNestedInput
    reservation?: ReservationUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutRoomNonAvailabilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    guest?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    propertyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peakSeasonRate?: PeakSeasonRateUncheckedUpdateManyWithoutRoomNestedInput
    roomFacility?: RoomFacilityUncheckedUpdateManyWithoutRoomNestedInput
    roomImage?: RoomImageUncheckedUpdateManyWithoutRoomNestedInput
    reservation?: ReservationUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type ReviewCreateWithoutPaymentInput = {
    rating?: number
    review: string
    replyMessage?: string | null
    replyDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewInput
    property: PropertyCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutPaymentInput = {
    id?: number
    rating?: number
    review: string
    userId: number
    propertyId: number
    replyMessage?: string | null
    replyDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutPaymentInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutPaymentInput, ReviewUncheckedCreateWithoutPaymentInput>
  }

  export type ReviewCreateManyPaymentInputEnvelope = {
    data: ReviewCreateManyPaymentInput | ReviewCreateManyPaymentInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPaymentInput = {
    name: string
    email: string
    password?: string | null
    imageUrl?: string | null
    token?: string | null
    role?: $Enums.Role
    provider?: $Enums.Provider
    isVerified?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewCreateNestedManyWithoutUserInput
    Tenant?: TenantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    imageUrl?: string | null
    token?: string | null
    role?: $Enums.Role
    provider?: $Enums.Provider
    isVerified?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedManyWithoutUserInput
    Tenant?: TenantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
  }

  export type ReservationCreateWithoutPaymentInput = {
    uuid?: string
    price: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutPaymentInput = {
    id?: number
    uuid?: string
    roomId: number
    price: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationCreateOrConnectWithoutPaymentInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutPaymentInput, ReservationUncheckedCreateWithoutPaymentInput>
  }

  export type ReservationCreateManyPaymentInputEnvelope = {
    data: ReservationCreateManyPaymentInput | ReservationCreateManyPaymentInput[]
    skipDuplicates?: boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutPaymentInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutPaymentInput, ReviewUncheckedUpdateWithoutPaymentInput>
    create: XOR<ReviewCreateWithoutPaymentInput, ReviewUncheckedCreateWithoutPaymentInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutPaymentInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutPaymentInput, ReviewUncheckedUpdateWithoutPaymentInput>
  }

  export type ReviewUpdateManyWithWhereWithoutPaymentInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutPaymentInput>
  }

  export type UserUpsertWithoutPaymentInput = {
    update: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type UserUpdateWithoutPaymentInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateManyWithoutUserNestedInput
    Tenant?: TenantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    Tenant?: TenantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReservationUpsertWithWhereUniqueWithoutPaymentInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutPaymentInput, ReservationUncheckedUpdateWithoutPaymentInput>
    create: XOR<ReservationCreateWithoutPaymentInput, ReservationUncheckedCreateWithoutPaymentInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutPaymentInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutPaymentInput, ReservationUncheckedUpdateWithoutPaymentInput>
  }

  export type ReservationUpdateManyWithWhereWithoutPaymentInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutPaymentInput>
  }

  export type RoomCreateWithoutReservationInput = {
    type: $Enums.Type
    stock: number
    price: number
    guest: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    peakSeasonRate?: PeakSeasonRateCreateNestedManyWithoutRoomInput
    roomFacility?: RoomFacilityCreateNestedManyWithoutRoomInput
    roomImage?: RoomImageCreateNestedManyWithoutRoomInput
    roomNonAvailability?: RoomNonAvailabilityCreateNestedManyWithoutRoomInput
    property: PropertyCreateNestedOneWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutReservationInput = {
    id?: number
    type: $Enums.Type
    stock: number
    price: number
    guest: number
    isDeleted?: boolean
    propertyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    peakSeasonRate?: PeakSeasonRateUncheckedCreateNestedManyWithoutRoomInput
    roomFacility?: RoomFacilityUncheckedCreateNestedManyWithoutRoomInput
    roomImage?: RoomImageUncheckedCreateNestedManyWithoutRoomInput
    roomNonAvailability?: RoomNonAvailabilityUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutReservationInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutReservationInput, RoomUncheckedCreateWithoutReservationInput>
  }

  export type PaymentCreateWithoutReservationInput = {
    uuid?: string
    status: $Enums.StatusPayment
    totalPrice: number
    duration: number
    paymentMethode?: $Enums.PaymentMethode
    paymentProof?: string | null
    invoiceUrl?: string | null
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewCreateNestedManyWithoutPaymentInput
    user: UserCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutReservationInput = {
    id?: number
    uuid?: string
    userId: number
    status: $Enums.StatusPayment
    totalPrice: number
    duration: number
    paymentMethode?: $Enums.PaymentMethode
    paymentProof?: string | null
    invoiceUrl?: string | null
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutReservationInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput>
  }

  export type RoomUpsertWithoutReservationInput = {
    update: XOR<RoomUpdateWithoutReservationInput, RoomUncheckedUpdateWithoutReservationInput>
    create: XOR<RoomCreateWithoutReservationInput, RoomUncheckedCreateWithoutReservationInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutReservationInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutReservationInput, RoomUncheckedUpdateWithoutReservationInput>
  }

  export type RoomUpdateWithoutReservationInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    guest?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peakSeasonRate?: PeakSeasonRateUpdateManyWithoutRoomNestedInput
    roomFacility?: RoomFacilityUpdateManyWithoutRoomNestedInput
    roomImage?: RoomImageUpdateManyWithoutRoomNestedInput
    roomNonAvailability?: RoomNonAvailabilityUpdateManyWithoutRoomNestedInput
    property?: PropertyUpdateOneRequiredWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutReservationInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    guest?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    propertyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peakSeasonRate?: PeakSeasonRateUncheckedUpdateManyWithoutRoomNestedInput
    roomFacility?: RoomFacilityUncheckedUpdateManyWithoutRoomNestedInput
    roomImage?: RoomImageUncheckedUpdateManyWithoutRoomNestedInput
    roomNonAvailability?: RoomNonAvailabilityUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type PaymentUpsertWithoutReservationInput = {
    update: XOR<PaymentUpdateWithoutReservationInput, PaymentUncheckedUpdateWithoutReservationInput>
    create: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutReservationInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutReservationInput, PaymentUncheckedUpdateWithoutReservationInput>
  }

  export type PaymentUpdateWithoutReservationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPaymentFieldUpdateOperationsInput | $Enums.StatusPayment
    totalPrice?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    paymentMethode?: EnumPaymentMethodeFieldUpdateOperationsInput | $Enums.PaymentMethode
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateManyWithoutPaymentNestedInput
    user?: UserUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutReservationInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusPaymentFieldUpdateOperationsInput | $Enums.StatusPayment
    totalPrice?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    paymentMethode?: EnumPaymentMethodeFieldUpdateOperationsInput | $Enums.PaymentMethode
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type UserCreateWithoutReviewInput = {
    name: string
    email: string
    password?: string | null
    imageUrl?: string | null
    token?: string | null
    role?: $Enums.Role
    provider?: $Enums.Provider
    isVerified?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentCreateNestedManyWithoutUserInput
    Tenant?: TenantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    imageUrl?: string | null
    token?: string | null
    role?: $Enums.Role
    provider?: $Enums.Provider
    isVerified?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
    Tenant?: TenantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
  }

  export type PropertyCreateWithoutReviewInput = {
    slug: string
    title: string
    description: string
    latitude: string
    longitude: string
    status: $Enums.StatusProperty
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    location: string
    propertyImage?: PropertyImageCreateNestedManyWithoutPropertyInput
    propertyFacility?: PropertyFacilityCreateNestedManyWithoutPropertyInput
    room?: RoomCreateNestedManyWithoutPropertyInput
    tenant: TenantCreateNestedOneWithoutPropertyInput
    propertyCategory: PropertyCategoryCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateWithoutReviewInput = {
    id?: number
    slug: string
    title: string
    description: string
    latitude: string
    longitude: string
    status: $Enums.StatusProperty
    isDeleted?: boolean
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    location: string
    propertyCategoryId: number
    propertyImage?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    propertyFacility?: PropertyFacilityUncheckedCreateNestedManyWithoutPropertyInput
    room?: RoomUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutReviewInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutReviewInput, PropertyUncheckedCreateWithoutReviewInput>
  }

  export type PaymentCreateWithoutReviewInput = {
    uuid?: string
    status: $Enums.StatusPayment
    totalPrice: number
    duration: number
    paymentMethode?: $Enums.PaymentMethode
    paymentProof?: string | null
    invoiceUrl?: string | null
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentInput
    reservation?: ReservationCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutReviewInput = {
    id?: number
    uuid?: string
    userId: number
    status: $Enums.StatusPayment
    totalPrice: number
    duration: number
    paymentMethode?: $Enums.PaymentMethode
    paymentProof?: string | null
    invoiceUrl?: string | null
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservation?: ReservationUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutReviewInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutReviewInput, PaymentUncheckedCreateWithoutReviewInput>
  }

  export type UserUpsertWithoutReviewInput = {
    update: XOR<UserUpdateWithoutReviewInput, UserUncheckedUpdateWithoutReviewInput>
    create: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewInput, UserUncheckedUpdateWithoutReviewInput>
  }

  export type UserUpdateWithoutReviewInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateManyWithoutUserNestedInput
    Tenant?: TenantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    Tenant?: TenantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PropertyUpsertWithoutReviewInput = {
    update: XOR<PropertyUpdateWithoutReviewInput, PropertyUncheckedUpdateWithoutReviewInput>
    create: XOR<PropertyCreateWithoutReviewInput, PropertyUncheckedCreateWithoutReviewInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutReviewInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutReviewInput, PropertyUncheckedUpdateWithoutReviewInput>
  }

  export type PropertyUpdateWithoutReviewInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPropertyFieldUpdateOperationsInput | $Enums.StatusProperty
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    propertyImage?: PropertyImageUpdateManyWithoutPropertyNestedInput
    propertyFacility?: PropertyFacilityUpdateManyWithoutPropertyNestedInput
    room?: RoomUpdateManyWithoutPropertyNestedInput
    tenant?: TenantUpdateOneRequiredWithoutPropertyNestedInput
    propertyCategory?: PropertyCategoryUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPropertyFieldUpdateOperationsInput | $Enums.StatusProperty
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    propertyCategoryId?: IntFieldUpdateOperationsInput | number
    propertyImage?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    propertyFacility?: PropertyFacilityUncheckedUpdateManyWithoutPropertyNestedInput
    room?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PaymentUpsertWithoutReviewInput = {
    update: XOR<PaymentUpdateWithoutReviewInput, PaymentUncheckedUpdateWithoutReviewInput>
    create: XOR<PaymentCreateWithoutReviewInput, PaymentUncheckedCreateWithoutReviewInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutReviewInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutReviewInput, PaymentUncheckedUpdateWithoutReviewInput>
  }

  export type PaymentUpdateWithoutReviewInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPaymentFieldUpdateOperationsInput | $Enums.StatusPayment
    totalPrice?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    paymentMethode?: EnumPaymentMethodeFieldUpdateOperationsInput | $Enums.PaymentMethode
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentNestedInput
    reservation?: ReservationUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusPaymentFieldUpdateOperationsInput | $Enums.StatusPayment
    totalPrice?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    paymentMethode?: EnumPaymentMethodeFieldUpdateOperationsInput | $Enums.PaymentMethode
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservation?: ReservationUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    rating?: number
    review: string
    paymentId: number
    propertyId: number
    replyMessage?: string | null
    replyDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyUserInput = {
    id?: number
    uuid?: string
    status: $Enums.StatusPayment
    totalPrice: number
    duration: number
    paymentMethode?: $Enums.PaymentMethode
    paymentProof?: string | null
    invoiceUrl?: string | null
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantCreateManyUserInput = {
    id?: number
    name: string
    imageUrl?: string | null
    phoneNumber?: string | null
    bankName: string
    bankNumber: string
    balance?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    replyMessage?: NullableStringFieldUpdateOperationsInput | string | null
    replyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutReviewNestedInput
    payment?: PaymentUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    paymentId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    replyMessage?: NullableStringFieldUpdateOperationsInput | string | null
    replyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    paymentId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    replyMessage?: NullableStringFieldUpdateOperationsInput | string | null
    replyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPaymentFieldUpdateOperationsInput | $Enums.StatusPayment
    totalPrice?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    paymentMethode?: EnumPaymentMethodeFieldUpdateOperationsInput | $Enums.PaymentMethode
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateManyWithoutPaymentNestedInput
    reservation?: ReservationUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPaymentFieldUpdateOperationsInput | $Enums.StatusPayment
    totalPrice?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    paymentMethode?: EnumPaymentMethodeFieldUpdateOperationsInput | $Enums.PaymentMethode
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateManyWithoutPaymentNestedInput
    reservation?: ReservationUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPaymentFieldUpdateOperationsInput | $Enums.StatusPayment
    totalPrice?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    paymentMethode?: EnumPaymentMethodeFieldUpdateOperationsInput | $Enums.PaymentMethode
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: StringFieldUpdateOperationsInput | string
    bankNumber?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateManyWithoutTenantNestedInput
    PropertyCategory?: PropertyCategoryUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: StringFieldUpdateOperationsInput | string
    bankNumber?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUncheckedUpdateManyWithoutTenantNestedInput
    PropertyCategory?: PropertyCategoryUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: StringFieldUpdateOperationsInput | string
    bankNumber?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateManyTenantInput = {
    id?: number
    slug: string
    title: string
    description: string
    latitude: string
    longitude: string
    status: $Enums.StatusProperty
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    location: string
    propertyCategoryId: number
  }

  export type PropertyCategoryCreateManyTenantInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateWithoutTenantInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPropertyFieldUpdateOperationsInput | $Enums.StatusProperty
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    propertyImage?: PropertyImageUpdateManyWithoutPropertyNestedInput
    propertyFacility?: PropertyFacilityUpdateManyWithoutPropertyNestedInput
    room?: RoomUpdateManyWithoutPropertyNestedInput
    review?: ReviewUpdateManyWithoutPropertyNestedInput
    propertyCategory?: PropertyCategoryUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPropertyFieldUpdateOperationsInput | $Enums.StatusProperty
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    propertyCategoryId?: IntFieldUpdateOperationsInput | number
    propertyImage?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    propertyFacility?: PropertyFacilityUncheckedUpdateManyWithoutPropertyNestedInput
    room?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
    review?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPropertyFieldUpdateOperationsInput | $Enums.StatusProperty
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    propertyCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type PropertyCategoryUpdateWithoutTenantInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutPropertycategoryNestedInput
  }

  export type PropertyCategoryUncheckedUpdateWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutPropertycategoryNestedInput
  }

  export type PropertyCategoryUncheckedUpdateManyWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageCreateManyPropertyInput = {
    id?: number
    imageUrl?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyFacilityCreateManyPropertyInput = {
    id?: number
    title: string
    description: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomCreateManyPropertyInput = {
    id?: number
    type: $Enums.Type
    stock: number
    price: number
    guest: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyPropertyInput = {
    id?: number
    rating?: number
    review: string
    userId: number
    paymentId: number
    replyMessage?: string | null
    replyDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyImageUpdateWithoutPropertyInput = {
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyFacilityUpdateWithoutPropertyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyFacilityUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyFacilityUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUpdateWithoutPropertyInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    guest?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peakSeasonRate?: PeakSeasonRateUpdateManyWithoutRoomNestedInput
    roomFacility?: RoomFacilityUpdateManyWithoutRoomNestedInput
    roomImage?: RoomImageUpdateManyWithoutRoomNestedInput
    roomNonAvailability?: RoomNonAvailabilityUpdateManyWithoutRoomNestedInput
    reservation?: ReservationUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    guest?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peakSeasonRate?: PeakSeasonRateUncheckedUpdateManyWithoutRoomNestedInput
    roomFacility?: RoomFacilityUncheckedUpdateManyWithoutRoomNestedInput
    roomImage?: RoomImageUncheckedUpdateManyWithoutRoomNestedInput
    roomNonAvailability?: RoomNonAvailabilityUncheckedUpdateManyWithoutRoomNestedInput
    reservation?: ReservationUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    guest?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutPropertyInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    replyMessage?: NullableStringFieldUpdateOperationsInput | string | null
    replyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewNestedInput
    payment?: PaymentUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    replyMessage?: NullableStringFieldUpdateOperationsInput | string | null
    replyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    replyMessage?: NullableStringFieldUpdateOperationsInput | string | null
    replyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateManyPropertyCategoryInput = {
    id?: number
    slug: string
    title: string
    description: string
    latitude: string
    longitude: string
    status: $Enums.StatusProperty
    isDeleted?: boolean
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    location: string
  }

  export type PropertyUpdateWithoutPropertycategoryInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPropertyFieldUpdateOperationsInput | $Enums.StatusProperty
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    propertyImage?: PropertyImageUpdateManyWithoutPropertyNestedInput
    propertyFacility?: PropertyFacilityUpdateManyWithoutPropertyNestedInput
    room?: RoomUpdateManyWithoutPropertyNestedInput
    tenant?: TenantUpdateOneRequiredWithoutPropertyNestedInput
    review?: ReviewUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutPropertycategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPropertyFieldUpdateOperationsInput | $Enums.StatusProperty
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    propertyImage?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    propertyFacility?: PropertyFacilityUncheckedUpdateManyWithoutPropertyNestedInput
    room?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
    review?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutPropertycategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPropertyFieldUpdateOperationsInput | $Enums.StatusProperty
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type PeakSeasonRateCreateManyRoomInput = {
    id?: number
    price: number
    startDate: Date | string
    endDate: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomFacilityCreateManyRoomInput = {
    id?: number
    title: string
    description: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomImageCreateManyRoomInput = {
    id?: number
    imageUrl?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomNonAvailabilityCreateManyRoomInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    isDeleted?: boolean
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationCreateManyRoomInput = {
    id?: number
    uuid?: string
    paymentId: number
    price: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeakSeasonRateUpdateWithoutRoomInput = {
    price?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeakSeasonRateUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeakSeasonRateUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomFacilityUpdateWithoutRoomInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomFacilityUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomFacilityUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomImageUpdateWithoutRoomInput = {
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomImageUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomImageUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomNonAvailabilityUpdateWithoutRoomInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomNonAvailabilityUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomNonAvailabilityUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUpdateWithoutRoomInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateOneRequiredWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    paymentId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    paymentId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyPaymentInput = {
    id?: number
    rating?: number
    review: string
    userId: number
    propertyId: number
    replyMessage?: string | null
    replyDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationCreateManyPaymentInput = {
    id?: number
    uuid?: string
    roomId: number
    price: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateWithoutPaymentInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    replyMessage?: NullableStringFieldUpdateOperationsInput | string | null
    replyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewNestedInput
    property?: PropertyUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    replyMessage?: NullableStringFieldUpdateOperationsInput | string | null
    replyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    replyMessage?: NullableStringFieldUpdateOperationsInput | string | null
    replyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUpdateWithoutPaymentInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    roomId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    roomId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}