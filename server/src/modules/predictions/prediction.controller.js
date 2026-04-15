import { predictionService } from './prediction.service.js';

export const getPerformancePrediction = async (req, res, next) => {
  try {
    const result = await predictionService.generatePrediction(req.user.id);

    res.status(200).json({
      success: true,
      message: 'Performance prediction generated successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

