// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa velloziana var. velloziana
const Mimosa_velloziana_var_velloziana = new Mimosa()
Mimosa_velloziana_var_velloziana.specificEpithet = 'velloziana var. velloziana'

Mimosa_velloziana_var_velloziana.stems = new Stems()

Mimosa_velloziana_var_velloziana.stipule = new Stipule()
Mimosa_velloziana_var_velloziana.stipule.margin = new MarginStipule()
Mimosa_velloziana_var_velloziana.stipule.adaxial = new AdaxialStipule()
Mimosa_velloziana_var_velloziana.stipule.abaxial = new AbaxialStipule()

Mimosa_velloziana_var_velloziana.leaf = new Leaf()
Mimosa_velloziana_var_velloziana.leaf.petiole = new Petiole()
Mimosa_velloziana_var_velloziana.leaf.bipinnate = new Bipinnate()
Mimosa_velloziana_var_velloziana.leaf.bipinnate.rachis = new Rachis()
Mimosa_velloziana_var_velloziana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_velloziana_var_velloziana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_velloziana_var_velloziana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_velloziana_var_velloziana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_velloziana_var_velloziana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_velloziana_var_velloziana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairs(1)
Mimosa_velloziana_var_velloziana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_velloziana_var_velloziana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_velloziana_var_velloziana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_velloziana_var_velloziana.inflorescence = new Inflorescence()
Mimosa_velloziana_var_velloziana.inflorescence.peduncle = new Peduncle()
Mimosa_velloziana_var_velloziana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_velloziana_var_velloziana.flower = new Flower()
Mimosa_velloziana_var_velloziana.flower.bracteole = new Bracteole()
Mimosa_velloziana_var_velloziana.flower.merism = '4-merous'
Mimosa_velloziana_var_velloziana.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_velloziana_var_velloziana.flower.calyx = new Calyx()
Mimosa_velloziana_var_velloziana.flower.calyx.shape = 'campanulate'
Mimosa_velloziana_var_velloziana.flower.corolla = new Corolla()
Mimosa_velloziana_var_velloziana.flower.corolla.shape = ['tubulose', 'campanulate']

Mimosa_velloziana_var_velloziana.androecium = new Androecium()
Mimosa_velloziana_var_velloziana.androecium.filaments = new Filaments()
Mimosa_velloziana_var_velloziana.androecium.filaments.colour = 'pinkish'

Mimosa_velloziana_var_velloziana.ginoecium = new Ginoecium()
Mimosa_velloziana_var_velloziana.ginoecium.ovary = new Ovary()

Mimosa_velloziana_var_velloziana.fruit = new Fruit()
Mimosa_velloziana_var_velloziana.fruit.stipe = new Stipe()
Mimosa_velloziana_var_velloziana.fruit.replum = new Replum()
Mimosa_velloziana_var_velloziana.fruit.epicarp = new Epicarp()

Mimosa_velloziana_var_velloziana.seed = new Seed()


// Description authorship
Mimosa_velloziana_var_velloziana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_velloziana_var_velloziana.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
})


// Sources
const source0 = new Source()
source0.sourceType = 'article'
source0.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source0.year = '2018'
source0.title = 'Toward a Census of *Mimosa* (Leguminosae) in the Atlantic Domain, Southeastern Brazil'
source0.journal = 'Systematic Botany'
source0.volume = '43'
source0.number = '1'
source0.pages = '162-197'
Mimosa_velloziana_var_velloziana.addSource(source0)

// Export Mimosa velloziana var. velloziana
export { Mimosa_velloziana_var_velloziana }