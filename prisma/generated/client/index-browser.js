
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.0.1
 * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
 */
Prisma.prismaVersion = {
  client: "6.0.1",
  engine: "5dbef10bdbfb579e07d35cc85fb1518d357cb99e"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.SampleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.TenantScalarFieldEnum = {
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

exports.Prisma.PropertyScalarFieldEnum = {
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

exports.Prisma.PropertyCategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  tenantId: 'tenantId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PropertyImageScalarFieldEnum = {
  id: 'id',
  imageUrl: 'imageUrl',
  isDeleted: 'isDeleted',
  propertyId: 'propertyId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PropertyFacilityScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  isDeleted: 'isDeleted',
  propertyId: 'propertyId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RoomScalarFieldEnum = {
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

exports.Prisma.PeakSeasonRateScalarFieldEnum = {
  id: 'id',
  price: 'price',
  startDate: 'startDate',
  endDate: 'endDate',
  isDeleted: 'isDeleted',
  roomId: 'roomId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RoomFacilityScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  isDeleted: 'isDeleted',
  roomId: 'roomId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RoomImageScalarFieldEnum = {
  id: 'id',
  imageUrl: 'imageUrl',
  isDeleted: 'isDeleted',
  roomId: 'roomId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RoomNonAvailabilityScalarFieldEnum = {
  id: 'id',
  startDate: 'startDate',
  endDate: 'endDate',
  isDeleted: 'isDeleted',
  reason: 'reason',
  roomId: 'roomId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PaymentScalarFieldEnum = {
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

exports.Prisma.ReservationScalarFieldEnum = {
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

exports.Prisma.ReviewScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  USER: 'USER',
  TENANT: 'TENANT'
};

exports.Provider = exports.$Enums.Provider = {
  CREDENTIAL: 'CREDENTIAL',
  GOOGLE: 'GOOGLE'
};

exports.StatusProperty = exports.$Enums.StatusProperty = {
  PUBLISHED: 'PUBLISHED',
  DRAFT: 'DRAFT'
};

exports.Type = exports.$Enums.Type = {
  Deluxe: 'Deluxe',
  Standard: 'Standard',
  Suite: 'Suite'
};

exports.StatusPayment = exports.$Enums.StatusPayment = {
  WAITING_FOR_PAYMENT: 'WAITING_FOR_PAYMENT',
  WAITING_FOR_PAYMENT_CONFIRMATION: 'WAITING_FOR_PAYMENT_CONFIRMATION',
  CANCELLED: 'CANCELLED',
  PROCESSED: 'PROCESSED',
  CHECKED_IN: 'CHECKED_IN',
  CHECKED_OUT: 'CHECKED_OUT'
};

exports.PaymentMethode = exports.$Enums.PaymentMethode = {
  MANUAL: 'MANUAL',
  OTOMATIS: 'OTOMATIS'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
