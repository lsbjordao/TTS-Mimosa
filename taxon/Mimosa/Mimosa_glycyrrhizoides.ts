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


// Description of Mimosa glycyrrhizoides
const Mimosa_glycyrrhizoides = new Mimosa()
Mimosa_glycyrrhizoides.specificEpithet = 'glycyrrhizoides'

Mimosa_glycyrrhizoides.stems = new Stems()

Mimosa_glycyrrhizoides.stipule = new Stipule()
Mimosa_glycyrrhizoides.stipule.margin = new MarginStipule()
Mimosa_glycyrrhizoides.stipule.adaxial = new AdaxialStipule()
Mimosa_glycyrrhizoides.stipule.abaxial = new AbaxialStipule()

Mimosa_glycyrrhizoides.leaf = new Leaf()
Mimosa_glycyrrhizoides.leaf.petiole = new Petiole()
Mimosa_glycyrrhizoides.leaf.bipinnate = new Bipinnate()
Mimosa_glycyrrhizoides.leaf.bipinnate.rachis = new Rachis()
Mimosa_glycyrrhizoides.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_glycyrrhizoides.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_glycyrrhizoides.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 5)
Mimosa_glycyrrhizoides.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_glycyrrhizoides.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_glycyrrhizoides.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_glycyrrhizoides.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(5)
Mimosa_glycyrrhizoides.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(7, 12)
Mimosa_glycyrrhizoides.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_glycyrrhizoides.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_glycyrrhizoides.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_glycyrrhizoides.inflorescence = new Inflorescence()
Mimosa_glycyrrhizoides.inflorescence.peduncle = new Peduncle()
Mimosa_glycyrrhizoides.inflorescence.capitate = new CapitateInflorescence()

Mimosa_glycyrrhizoides.flower = new Flower()
Mimosa_glycyrrhizoides.flower.bracteole = new Bracteole()
Mimosa_glycyrrhizoides.flower.calyx = new Calyx()
Mimosa_glycyrrhizoides.flower.calyx.shape = 'campanulate'
Mimosa_glycyrrhizoides.flower.corolla = new Corolla()
Mimosa_glycyrrhizoides.flower.corolla.shape = 'campanulate'

Mimosa_glycyrrhizoides.androecium = new Androecium()
Mimosa_glycyrrhizoides.androecium.filaments = new Filaments()
Mimosa_glycyrrhizoides.androecium.filaments.colour = 'pinkish'

Mimosa_glycyrrhizoides.ginoecium = new Ginoecium()
Mimosa_glycyrrhizoides.ginoecium.ovary = new Ovary()

Mimosa_glycyrrhizoides.fruit = new Fruit()
Mimosa_glycyrrhizoides.fruit.stipe = new Stipe()
Mimosa_glycyrrhizoides.fruit.replum = new Replum()
Mimosa_glycyrrhizoides.fruit.epicarp = new Epicarp()

Mimosa_glycyrrhizoides.seed = new Seed()


// Description authorship
Mimosa_glycyrrhizoides.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_glycyrrhizoides.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa glycyrrhizoides
export { Mimosa_glycyrrhizoides }