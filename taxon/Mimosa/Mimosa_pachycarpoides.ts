// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
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


// Description of Mimosa pachycarpoides
const Mimosa_pachycarpoides = new Mimosa()
Mimosa_pachycarpoides.specificEpithet = 'pachycarpoides'

Mimosa_pachycarpoides.stems = new Stems()

Mimosa_pachycarpoides.stipule = new Stipule()
Mimosa_pachycarpoides.stipule.margin = new MarginStipule()
Mimosa_pachycarpoides.stipule.adaxial = new AdaxialStipule()
Mimosa_pachycarpoides.stipule.abaxial = new AbaxialStipule()

Mimosa_pachycarpoides.leaf = new Leaf()
Mimosa_pachycarpoides.leaf.petiole = new Petiole()
Mimosa_pachycarpoides.leaf.bipinnate = new Bipinnate()
Mimosa_pachycarpoides.leaf.bipinnate.rachis = new Rachis()
Mimosa_pachycarpoides.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pachycarpoides.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pachycarpoides.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(10, 20)
Mimosa_pachycarpoides.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pachycarpoides.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pachycarpoides.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pachycarpoides.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pachycarpoides.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pachycarpoides.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pachycarpoides.inflorescence = new Inflorescence()
Mimosa_pachycarpoides.inflorescence.peduncle = new Peduncle()
Mimosa_pachycarpoides.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pachycarpoides.flower = new Flower()
Mimosa_pachycarpoides.flower.bracteole = new Bracteole()
Mimosa_pachycarpoides.flower.calyx = new Calyx()
Mimosa_pachycarpoides.flower.corolla = new Corolla()

Mimosa_pachycarpoides.androecium = new Androecium()
Mimosa_pachycarpoides.androecium.filaments = new Filaments()

Mimosa_pachycarpoides.ginoecium = new Ginoecium()
Mimosa_pachycarpoides.ginoecium.ovary = new Ovary()

Mimosa_pachycarpoides.fruit = new Fruit()
Mimosa_pachycarpoides.fruit.stipe = new Stipe()
Mimosa_pachycarpoides.fruit.replum = new Replum()
Mimosa_pachycarpoides.fruit.epicarp = new Epicarp()

Mimosa_pachycarpoides.seed = new Seed()


// Description authorship
Mimosa_pachycarpoides.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pachycarpoides.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa pachycarpoides
export { Mimosa_pachycarpoides }