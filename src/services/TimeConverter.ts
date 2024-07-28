class TimeConverterDefault {
  findEarliestTime(dates: Date[]): Date {
    return this.sortTimes(dates)[0];
  }

  findLatestTime(dates: Date[]): Date {
    return this.sortTimes(dates)[dates.length - 1];
  }

  getTimeDifferenceInMinutes(earlierDate: Date, laterDate: Date) {
    const hours = laterDate.getHours() - earlierDate.getHours();
    const minutes = laterDate.getMinutes() - earlierDate.getMinutes();
    return hours * 60 + minutes;
  }

  addMinutes(oldDate: Date, minutes: number): Date {
    //turn minutes to milliseconds
    return new Date(oldDate.getTime() + minutes * 60000);
  }

  private sortTimes(dates: Date[]): Date[] {
    return dates.sort((a, b) => {
      if (a.getHours() === b.getHours()) {
        return a.getMinutes() - b.getMinutes();
      } else {
        return a.getHours() - b.getHours();
      }
    });
  }
}
export const TimeConverter = new TimeConverterDefault();
