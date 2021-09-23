export type VoyageLegs = {
  VesselName: String;
  PORT_UN_FROM: String;
  PORT_UN_TO: String;
  HOURS_UNDERWAY: number;
  total_distance: number;
  CARGO_to_DWT_pct: number;
  Total_CO2: number;
  StandardShipDesign: String;
  VesselTypeGroup: String;
};

export type AISPOSITION = {
  VesselName: String;
  From: String;
  To: String;
  LoadingCondition: String;
  hoursSinceLastPosition: number;
  longitude: number;
  latitude: number;
};
