import { ServerFile } from "../files/model";

export type TrackContract = {
	Created: Date | null;
	FinishDate: Date | null;
	Id: string;
	Notes: string;
	StartDate: Date | null;
	Title: string;
	TrackId: string;
	Timezone: string;

	FileIds?: string[];
	Files?: ServerFile[];
};

export type ServerTrackContract = {
	Created: string | null;
	FinishDate: string | null;
	Id: string;
	Notes: string;
	StartDate: string | null;
	Title: string;
	TrackId: string;
	Timezone: string;

	FileIds?: string[];
	Files?: ServerFile[];
};

export function convertTrackContract(c: TrackContract): ServerTrackContract {
	return {
		...c,
		Created: c.Created?.toISOString() ?? null,
		FinishDate: c.FinishDate?.toISOString() ?? null,
		StartDate: c.StartDate?.toISOString() ?? null,
	};
}


export function convertServerTrackContract(c: ServerTrackContract): TrackContract {
	return {
		...c,
		Created: c.Created ? new Date(c.Created) : null,
		FinishDate: c.FinishDate ? new Date(c.FinishDate) : null,
		StartDate: c.StartDate ? new Date(c.StartDate) : null
	};
}