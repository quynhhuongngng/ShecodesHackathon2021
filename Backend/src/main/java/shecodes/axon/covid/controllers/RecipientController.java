package shecodes.axon.covid.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import shecodes.axon.covid.models.Neccessary;
import shecodes.axon.covid.services.NeccessaryService;

@Controller
public class RecipientController {
	
	@Autowired
	private NeccessaryService neccessaryService;
	
	//Chức năng: Thêm sản phẩm
		@GetMapping("/recipient/product/productadd")
		public String addProduct(Model model) {
			//Hiển thị drop down loại sp
			List<Neccessary> neccessaryList = neccessaryService.getNeccessary();
			model.addAttribute("neccessaries", neccessaryList);

			return "admin/body/ProductAdd";
		}

		@PostMapping(value = "recipient/product/addNew")
		public String addNew(Neccessary product) {
			neccessaryService.save(product);
			return "redirect:/recipient/product";
		}
}
