class JoinUsPage {
	get availablejobsRows() { return this.jobsTable.$$('li'); }
	get jobsButton() { return $('.HeroBasic_link__3yZO4.button'); }
	get jobsTable() { return $('.JobsSection_list__2Ypal'); }

}

export default new JoinUsPage();