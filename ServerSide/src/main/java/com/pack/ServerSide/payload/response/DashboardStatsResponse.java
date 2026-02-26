package com.pack.ServerSide.payload.response;

public class DashboardStatsResponse {

	private final long managers;
	private final long planes;
	private final long pilots;
	private final long hangars;
	private final long allocatedPlanes;
	private final long unallocatedPlanes;

	public DashboardStatsResponse(long managers, long planes, long pilots, long hangars, long allocatedPlanes,
			long unallocatedPlanes) {
		this.managers = managers;
		this.planes = planes;
		this.pilots = pilots;
		this.hangars = hangars;
		this.allocatedPlanes = allocatedPlanes;
		this.unallocatedPlanes = unallocatedPlanes;
	}

	public long getManagers() {
		return managers;
	}

	public long getPlanes() {
		return planes;
	}

	public long getPilots() {
		return pilots;
	}

	public long getHangars() {
		return hangars;
	}

	public long getAllocatedPlanes() {
		return allocatedPlanes;
	}

	public long getUnallocatedPlanes() {
		return unallocatedPlanes;
	}
}
