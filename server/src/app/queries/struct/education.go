package queries

type Education struct {
	INSTITUTION string `json:"institution"`
	AREA string `json:"area"`
	STUDYTYPE string `json:"studytype"`
	STARTDATE string `json:"startdate"`
	ENDDATE string `json:"enddate"`
	GPA string `json:"gpa"`
	COURSES []string `json:"courses"`
}