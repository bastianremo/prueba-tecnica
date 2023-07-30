export interface PointOfInterest {
    ID: number;
    UUID: string;
    UserComments: UserComment[];
    MediaItems: MediaItem[];
    IsRecentlyVerified: boolean;
    DateLastVerified: string;
    ParentChargePointID: number;
    DataProviderID: number;
    DataProvidersReference: string;
    OperatorID: number;
    OperatorsReference: string;
    UsageTypeID: number;
    UsageCost: string;
    AddressInfo: AddressInfo;
    Connections: Connection[];
    NumberOfPoints: number;
    GeneralComments: string;
    DatePlanned: string;
    DateLastConfirmed: string;
    StatusTypeID: number;
    DateLastStatusUpdate: string;
    MetadataValues: any[];
    DataQualityLevel: number;
    DateCreated: string;
    SubmissionStatusTypeID: number;
    DataProvider: DataProvider;
    OperatorInfo: OperatorInfo;
    UsageType: UsageType;
    StatusType: StatusType;
    SubmissionStatus: SubmissionStatus;
  }
  
  export interface UserComment {
    ID: string;
    ChargePointID: number;
    CommentTypeID: number;
    CommentType: any;
    UserName: string;
    Comment: string;
    RelatedURL: string;
    DateCreated: string;
    User: User;
    CheckinStatusTypeID: number;
    CheckinStatusType: any;
  }
  
  export interface User {
    ID: number;
    Username: string;
    ReputationPoints: number;
    ProfileImageURL: string;
  }
  
  export interface MediaItem {
    ID: string;
    ChargePointID: string;
    ItemURL: string;
    ItemThumbnailURL: string;
    Comment: string;
    IsEnabled: boolean;
    IsVideo: boolean;
    IsFeaturedItem: boolean;
    IsExternalResource: boolean;
    User: User;
    DateCreated: string;
  }
  
  export interface AddressInfo {
    ID: number;
    Title: string;
    AddressLine1: string;
    AddressLine2: string;
    Town: string;
    StateOrProvince: string;
    Postcode: string;
    CountryID: number;
    Country: Country;
    Latitude: number;
    Longitude: number;
    ContactTelephone1: string;
    ContactTelephone2: string;
    ContactEmail: string;
    AccessComments: string;
    RelatedURL: string;
    Distance: number;
    DistanceUnit: number;
  }
  
  export interface Country {
    ISOCode: string;
    ContinentCode: string;
    ID: number;
    Title: string;
  }
  
  export interface Connection {
    ID: number;
    ConnectionTypeID: number;
    ConnectionType: ConnectionType;
    Reference: string;
    StatusTypeID: number;
    StatusType: StatusType;
    LevelID: number;
    Level: Level;
    Amps: number;
    Voltage: number;
    PowerKW: number;
    CurrentTypeID: number;
    CurrentType: CurrentType;
    Quantity: number;
    Comments: string;
  }
  
  export interface ConnectionType {
    FormalName: string;
    IsDiscontinued: boolean;
    IsObsolete: boolean;
    ID: number;
    Title: string;
  }
  
  export interface StatusType {
    IsOperational: boolean;
    IsUserSelectable: boolean;
    ID: number;
    Title: string;
  }
  
  export interface Level {
    ID: number;
    Title: string;
    Comments: string;
    IsFastChargeCapable: boolean;
  }
  
  export interface CurrentType {
    Title: string;
    ID: number;
  }
  
  export interface DataProvider {
    WebsiteURL: string;
    Comments: string;
    DataProviderStatusType: DataProviderStatusType;
    IsRestrictedEdit: boolean;
    IsOpenDataLicensed: string;
    IsApprovedImport: string;
    License: string;
    DateLastImported: string;
    ID: number;
    Title: string;
  }
  
  export interface DataProviderStatusType {
    IsProviderEnabled: boolean;
    ID: number[];
    Title: string[];
  }
  
  export interface OperatorInfo {
    WebsiteURL: string;
    Comments: string;
    PhonePrimaryContact: string;
    PhoneSecondaryContact: string;
    IsPrivateIndividual: boolean;
    AddressInfo: AddressInfo;
    BookingURL: string;
    ContactEmail: string;
    FaultReportEmail: string;
    IsRestrictedEdit: boolean;
    ID: number;
    Title: string;
  }
  
  export interface UsageType {
    IsPayAtLocation: boolean;
    IsMembershipRequired: boolean;
    IsAccessKeyRequired: boolean;
    ID: number;
    Title: string;
  }
  
  export interface SubmissionStatus {
    IsLive: boolean;
    ID: number;
    Title: string;
  }
  