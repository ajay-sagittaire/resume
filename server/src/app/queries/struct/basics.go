package queries

type Location struct {
	ADDRESS string `json:"address"`
	POSTALCODE string `json:"postalcode"`
	CITY string `json:"city"`
	COUNTRYCODE string `json:"countrycode"`
	REGION string `json:"region"`
}

type Profiles struct {
	NETWORK string `json:"network"`
	URL string `json:"url"`
}

type Basics struct {
	NAME string `json:"name"`
	LABEL string `json:"label"`
	PICTURE  string `json:"picture"`
	EMAIL   string `json:"email"`
	PHONE   string `json:"phone"`
	WEBSITE   string `json:"website"`
	SUMMARY   string `json:"summary"`
	LOCATION   Location `json:"location"`
	PROFILES []Profiles `json:"profiles"`
}