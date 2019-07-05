package queries

type Volunteer struct {
	ORGANIZATION string `json:"organization"`
	POSITION string `json:"position"`
	WEBSITE string `json:"website"`
	STARTDATE string `json:"startdate"`
	ENDDATE string `json:"enddate"`
	SUMMARY string `json:"summary"`
	HIGHLIGHTS []string `json:"highlights"`
}