export default {
  computed: {
    myAge() {
      const today = new Date()
      const DOB = new Date('September 14, 1995')
      return this.yearsDiff(DOB, today)
    },
    timeSinceResignation() {
      const today = new Date()
      const resignationDate = new Date('July 16, 2021')
      const daysDiff = this.daysDiff(resignationDate, today)
      if (daysDiff < 0) {
        return 0
      }
      return daysDiff.toFixed(2)
    },
    daysSinceStarting() {
      const today = new Date()
      const resignationDate = new Date('August 01, 2021')
      const daysDiff = this.daysDiff(resignationDate, today)
      if (daysDiff < 0) {
        return 0
      }
      return daysDiff.toFixed(2)
    },
    runwayLeft() {
      return (928 - this.timeSinceResignation).toFixed(2)
    },
    mrr() {
      const mrr = 0;
      return mrr;
    },
    arr() {
      return this.mrr * 12;
    }
  },
  methods: {
    daysDiff(dateFrom, dateTo) {
      return (dateTo.getTime() - dateFrom.getTime()) / (1000 * 3600 * 24)
    },
    yearsDiff(dateFrom, dateTo) {
      return (this.daysDiff(dateFrom, dateTo) / 365).toFixed(2)
    },
  },
}