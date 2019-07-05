package queries

type Publications struct {
	NAME string `json:"name"`
	PUBLISHER string `json:"publisher"`
	RELEASEDATE string `json:"releasedate"`
	WEBSITE string `json:"website"`
	SUMMARY string `json:"summary"`
}