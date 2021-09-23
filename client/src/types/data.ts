export type ShipRaw = {
    vesselName: string;
    from: string;
    to: string;
    hoursUnderway: string;
    totalDistance: string;
    cargoToDwtPct: string;
    totalCO2: string;
    standardShipDesign: string;
    vesselTypeGroup: string;
};

export type Ship = {
    vesselName: string;
    from: string;
    to: string;
    hoursUnderway: number;
    totalDistance: number;
    cargoToDwtPct: number;
    totalCO2: number;
    standardShipDesign: string;
    vesselTypeGroup: string;
};

export type LocationRaw = {
    vesselName: string;
    from: string;
    to: string;
    loadingCondition: string;
    hoursSinceLastPosition: string;
    longitude: string;
    latitude: string;
};

export type Location = {
    vesselName: string;
    from: string;
    to: string;
    loadingCondition: string;
    hoursSinceLastPosition: number;
    longitude: number;
    latitude: number;
};
